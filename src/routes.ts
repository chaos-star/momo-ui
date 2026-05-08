import auth, { AuthParams, UserPermission } from '@/utils/authentication';
import { useContext, useEffect, useMemo, useState } from 'react';
import { GlobalContext } from '@/context';
import {
  AuthMenuNode,
  getAuthContextResource,
  readCachedAuthContext,
} from '@/api/auth';

export type IRoute = AuthParams & {
  name: string;
  resourceNames?: Record<string, string>;
  key: string;
  path?: string;
  icon?: string;
  // 当前页是否展示面包屑
  breadcrumb?: boolean;
  children?: IRoute[];
  // 当前路由是否渲染菜单项，为 true 的话不会在菜单中显示，但可通过路由地址访问。
  ignore?: boolean;
};

type LocaleKey = 'zh-CN' | 'en-US' | 'es-ES' | string;

export const routes: IRoute[] = [
  {
    name: 'menu.dashboard',
    key: 'dashboard',
    children: [
      {
        name: 'menu.dashboard.workplace',
        key: 'dashboard/workplace',
      },
    ],
  },
  {
    name: 'Example',
    key: 'example',
  },
];

function normalizeRoutePath(path?: string) {
  return (path || '').replace(/^\/+/, '').replace(/\/+$/, '');
}

function getRouteKey(menu: AuthMenuNode) {
  return normalizeRoutePath(
    menu.routerPath || menu.resourcePath || menu.resourceCode
  );
}

function getRouteName(menu: AuthMenuNode, lang: LocaleKey = 'zh-CN') {
  return (
    menu.resourceNames?.[lang] ||
    menu.resourceNames?.['zh-CN'] ||
    menu.resourceName ||
    menu.resourceCode ||
    getRouteKey(menu)
  );
}

export function transformMenusToRoutes(
  menus: AuthMenuNode[] = [],
  lang: LocaleKey = 'zh-CN'
): IRoute[] {
  return menus
    .slice()
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    .map((menu) => {
      const children = transformMenusToRoutes(menu.children || [], lang);
      const route: IRoute = {
        name: getRouteName(menu, lang),
        resourceNames: menu.resourceNames,
        key: getRouteKey(menu),
        path: menu.routerPath || menu.resourcePath,
        icon: menu.resourceIcon,
        children: children.length ? children : undefined,
      };

      if (route.key === 'dashboard' && !route.children) {
        route.children = routes[0].children;
      }

      return route;
    })
    .filter((route) => route.key);
}

function getRoutesFromCache(tenantCode?: string, lang: LocaleKey = 'zh-CN') {
  if (!tenantCode) {
    return routes;
  }

  const cached = readCachedAuthContext(tenantCode);
  const cachedRoutes = transformMenusToRoutes(cached?.menus || [], lang);
  return cachedRoutes.length ? cachedRoutes : routes;
}

export const getName = (path: string, targetRoutes: IRoute[]) => {
  return targetRoutes.find((item) => {
    const itemPath = `/${item.key}`;
    if (path === itemPath) {
      return item.name;
    } else if (item.children) {
      return getName(path, item.children);
    }
  });
};

export const generatePermission = (role: string) => {
  const actions = role === 'admin' ? ['*'] : ['read'];
  const result = {};
  routes.forEach((item) => {
    if (item.children) {
      item.children.forEach((child) => {
        result[child.name] = actions;
      });
    }
  });
  return result;
};

const filterRoutesByPermission = (
  targetRoutes: IRoute[],
  userPermission: UserPermission,
  arr: IRoute[] = []
): IRoute[] => {
  if (!targetRoutes.length) {
    return [];
  }
  for (const route of targetRoutes) {
    const { requiredPermissions, oneOfPerm } = route;
    let visible = true;
    if (requiredPermissions) {
      visible = auth({ requiredPermissions, oneOfPerm }, userPermission);
    }

    if (!visible) {
      continue;
    }
    if (route.children && route.children.length) {
      const newRoute = { ...route, children: [] };
      filterRoutesByPermission(
        route.children,
        userPermission,
        newRoute.children
      );
      if (newRoute.children.length) {
        arr.push(newRoute);
      }
    } else {
      arr.push({ ...route });
    }
  }

  return arr;
};

const useRoute = (
  userPermission: UserPermission,
  tenantCode?: string
): [IRoute[], string, boolean] => {
  const { lang = 'zh-CN' } = useContext(GlobalContext);
  const [permissionRoute, setPermissionRoute] = useState(() =>
    getRoutesFromCache(tenantCode, lang)
  );
  const [loading, setLoading] = useState(false);

  const permissionKey = useMemo(
    () => JSON.stringify(userPermission || {}),
    [userPermission]
  );

  useEffect(() => {
    let canceled = false;

    async function loadRoutes() {
      const cachedRoutes = getRoutesFromCache(tenantCode, lang);
      setPermissionRoute(
        filterRoutesByPermission(cachedRoutes, userPermission)
      );

      if (!tenantCode || readCachedAuthContext(tenantCode)) {
        return;
      }

      setLoading(true);
      try {
        const resource = await getAuthContextResource(tenantCode);
        if (canceled) {
          return;
        }
        const remoteRoutes = transformMenusToRoutes(resource.menus || [], lang);
        setPermissionRoute(
          filterRoutesByPermission(
            remoteRoutes.length ? remoteRoutes : routes,
            userPermission
          )
        );
      } finally {
        if (!canceled) {
          setLoading(false);
        }
      }
    }

    loadRoutes();

    return () => {
      canceled = true;
    };
  }, [lang, permissionKey, tenantCode, userPermission]);

  const defaultRoute = useMemo(() => {
    const first = permissionRoute[0];
    if (first) {
      const firstRoute = first?.children?.[0]?.key || first.key;
      return firstRoute;
    }
    return '';
  }, [permissionRoute]);

  return [permissionRoute, defaultRoute, loading];
};

export default useRoute;
