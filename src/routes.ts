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
  // 后端 sys_menu.menu_type：CATALOG / MENU / BUTTON；用于默认入口选择时只挑 MENU 节点
  menuType?: string;
  // 1=该节点为该用户在当前租户下的默认首页
  useIndex?: number;
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
        menuType: menu.menuType,
        useIndex: menu.useIndex,
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
  if (!cached) {
    return routes;
  }
  const cachedRoutes = transformMenusToRoutes(cached?.menus || [], lang);
  // 已拉取过权限上下文但菜单为空：不再回落到内置全量路由，避免无权限页被当作默认入口
  return cachedRoutes.length ? cachedRoutes : [];
}

type MenuLikeNode = AuthMenuNode | IRoute;

function readMenuType(node: MenuLikeNode): string {
  return (node as { menuType?: string }).menuType || '';
}

function readUseIndex(node: MenuLikeNode): number {
  const value = (node as { useIndex?: number }).useIndex;
  return typeof value === 'number' ? value : 0;
}

function readNodePath(node: MenuLikeNode): string {
  if ((node as IRoute).key !== undefined) {
    const route = node as IRoute;
    return normalizeRoutePath(route.path || route.key);
  }
  const menu = node as AuthMenuNode;
  return normalizeRoutePath(
    menu.routerPath || menu.resourcePath || menu.resourceCode
  );
}

function readChildren(node: MenuLikeNode): MenuLikeNode[] {
  const children = (node as { children?: MenuLikeNode[] }).children;
  return Array.isArray(children) ? children : [];
}

/**
 * 深度优先查找标记为默认首页（{@code useIndex === 1}）且类型为 MENU 的节点路径。
 * 必须满足 path 非空；否则视为后端数据异常，返回空字符串。
 */
export function findIndexedMenuPath(nodes: MenuLikeNode[] = []): string {
  for (const node of nodes) {
    if (
      readUseIndex(node) === 1 &&
      readMenuType(node).toUpperCase() === 'MENU'
    ) {
      const path = readNodePath(node);
      if (path) {
        return path;
      }
    }
    const children = readChildren(node);
    if (children.length) {
      const inner = findIndexedMenuPath(children);
      if (inner) {
        return inner;
      }
    }
  }
  return '';
}

/**
 * 深度优先查找权限菜单树中**第一个 menuType=MENU** 的叶子节点路径，作为默认首页未设置时的兜底。
 * 不会选中 CATALOG / BUTTON 节点。
 */
export function findFirstMenuPath(nodes: MenuLikeNode[] = []): string {
  for (const node of nodes) {
    const children = readChildren(node);
    if (children.length) {
      const inner = findFirstMenuPath(children);
      if (inner) {
        return inner;
      }
    }
    if (readMenuType(node).toUpperCase() === 'MENU') {
      const path = readNodePath(node);
      if (path) {
        return path;
      }
    }
  }
  return '';
}

/**
 * 选取默认入口路径：优先 useIndex=1 的 MENU，其次首个 MENU；都没有则返回空字符串（由调用方走 /403 兜底）。
 */
export function pickDefaultMenuPath(nodes: MenuLikeNode[] = []): string {
  return findIndexedMenuPath(nodes) || findFirstMenuPath(nodes);
}

/**
 * 兼容老调用点：仅在尚未迁移到 {@link pickDefaultMenuPath} 的少量场景使用，等同于"无 useIndex 的兜底"。
 */
export function getFirstMenuEntryPath(menus: AuthMenuNode[] = []): string {
  return findFirstMenuPath(menus);
}

/**
 * 兼容老调用点：返回路由树中第一个 MENU 节点 key（不再仅看叶子，而是按"首个 MENU"语义）。
 */
export function getFirstLeafRouteKey(routeTree: IRoute[]): string {
  return findFirstMenuPath(routeTree);
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
          filterRoutesByPermission(remoteRoutes, userPermission)
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

  const defaultRoute = useMemo(
    () => pickDefaultMenuPath(permissionRoute),
    [permissionRoute]
  );

  return [permissionRoute, defaultRoute, loading];
};

export default useRoute;
