import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useAliveController } from 'react-activation';
import { Layout, Menu, Breadcrumb, Spin } from '@arco-design/web-react';
import cs from 'classnames';
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-react/icon';
import { useSelector } from 'react-redux';
import qs from 'query-string';
import NProgress from 'nprogress';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import TabBar, { formatTab } from './components/TabBar';
import KeepAliveRoute from './components/KeepAliveRoute';
import useRoute, { IRoute } from '@/routes';
import { isArray } from './utils/is';
import useLocale from './utils/useLocale';
import getUrlParams from './utils/getUrlParams';
import lazyload from './utils/lazyload';
import { getRouteIcon } from './utils/routeIcon';
import {
  getDefaultTenantCode,
  getResolvedTenantCodeForPath,
  getResolvedTenantPathPrefix,
  getTenantCodeFromPathname,
  stripTenantFromPathname,
} from './utils/tenant';
import {
  RouteTab,
  ensureTabListTenantPrefix,
  getTabCacheKey,
  getTabIdentity,
  readTabsFromStorage,
  saveTabsToStorage,
} from './utils/tabStorage';
import { GlobalState } from './store';
import styles from './style/layout.module.less';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Content = Layout.Content;

function getFlattenRoutes(routes) {
  const mod = import.meta.glob('./pages/**/[a-z[]*.tsx');
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (route.key && !route.children) {
        const loader =
          mod[`./pages/${route.key}/index.tsx`] ||
          (() => import('./pages/exception/403'));
        route.component = lazyload(loader);
        res.push(route);
      } else if (isArray(route.children) && route.children.length) {
        travel(route.children);
      }
    });
  }
  travel(routes);
  return res;
}

function PageLayout() {
  const urlParams = getUrlParams();
  const history = useHistory();
  const location = useLocation();
  const { dropScope, refreshScope } = useAliveController();
  const pathname = location.pathname;
  const tenantCode = getTenantCodeFromPathname(pathname);
  const pathPrefix = tenantCode ? `/${tenantCode}` : '';
  const routePathname = stripTenantFromPathname(pathname);
  const currentComponent = qs.parseUrl(routePathname).url.slice(1);
  const locale = useLocale();
  const { settings, userLoading, userInfo } = useSelector(
    (state: GlobalState) => state
  );

  const tabIdentity = useMemo(
    () => ({ tenantCode: tenantCode || getTabIdentity(userInfo).tenantCode }),
    [tenantCode, userInfo]
  );
  const identityKey = useMemo(
    () => tabIdentity.tenantCode || 'unknown',
    [tabIdentity.tenantCode]
  );
  const [routes, defaultRoute, routeLoading] = useRoute(
    userInfo?.permissions,
    tenantCode
  );
  const defaultSelectedKeys = [currentComponent || defaultRoute];
  const paths = (currentComponent || defaultRoute).split('/');
  const defaultOpenKeys = paths.slice(0, paths.length - 1);

  const [breadcrumb, setBreadCrumb] = useState([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [selectedKeys, setSelectedKeys] =
    useState<string[]>(defaultSelectedKeys);
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);
  const [tabList, setTabList] = useState<RouteTab[]>([]);

  const routeMap = useRef<Map<string, React.ReactNode[]>>(new Map());
  const menuMap = useRef<
    Map<string, { menuItem?: boolean; subMenu?: boolean }>
  >(new Map());

  const navbarHeight = 60;
  const menuWidth = collapsed ? 48 : settings.menuWidth;

  const showNavbar = settings.navbar && urlParams.navbar !== false;
  const showMenu = settings.menu && urlParams.menu !== false;
  const showTopMenu = showMenu && settings.topMenu;
  const showSiderMenu = showMenu && !showTopMenu;
  const showTabBar = settings.tabBar && urlParams.tabBar !== false;
  const showFooter = settings.footer && urlParams.footer !== false;

  const flattenRoutes = useMemo(() => getFlattenRoutes(routes) || [], [routes]);
  const tabPathPrefix = useMemo(
    () => getResolvedTenantPathPrefix(pathname, userInfo),
    [pathname, userInfo]
  );
  const defaultTab = useMemo((): RouteTab | null => {
    if (!defaultRoute) {
      return null;
    }
    const prefix = tabPathPrefix.replace(/\/$/, '');
    const defaultPath = `${prefix}/${defaultRoute}`.replace(/\/+/g, '/');
    return (
      formatTab(defaultPath, '', flattenRoutes) || {
        title: defaultRoute,
        name: defaultRoute,
        path: defaultPath,
        fullPath: defaultPath,
      }
    );
  }, [defaultRoute, flattenRoutes, tabPathPrefix]);

  const currentTab = useMemo(
    () => formatTab(location.pathname, location.search, flattenRoutes),
    [flattenRoutes, location.pathname, location.search]
  );

  useEffect(() => {
    if (!defaultRoute || !showTabBar || !defaultTab) {
      return;
    }

    const resolvedTenant = getResolvedTenantCodeForPath(pathname, userInfo);
    const storedTabs = readTabsFromStorage(tabIdentity);
    const normalizedStored = storedTabs?.length
      ? ensureTabListTenantPrefix(storedTabs, resolvedTenant)
      : null;
    setTabList(normalizedStored?.length ? normalizedStored : [defaultTab]);
  }, [
    defaultRoute,
    defaultTab,
    identityKey,
    pathname,
    showTabBar,
    tabIdentity,
    userInfo,
  ]);

  useEffect(() => {
    if (showTabBar || !tabList.length) {
      return;
    }

    const currentFullPath = `${location.pathname}${location.search || ''}`;
    tabList.forEach((tab) => {
      if (tab.fullPath !== currentFullPath) {
        dropScope(getTabCacheKey(tabIdentity, tab.fullPath));
      }
    });
  }, [
    dropScope,
    location.pathname,
    location.search,
    showTabBar,
    tabIdentity,
    tabList,
  ]);

  useEffect(() => {
    if (tenantCode) {
      return;
    }

    const defaultTenantCode = getDefaultTenantCode();
    history.replace(
      defaultTenantCode ? `/${defaultTenantCode}${pathname}` : '/403'
    );
  }, [history, pathname, tenantCode]);

  useEffect(() => {
    if (!currentTab) {
      return;
    }

    setTabList((list) => {
      if (!showTabBar) {
        return [currentTab];
      }

      const fallback = defaultTab ? [defaultTab] : [];
      const nextList = list.length ? list : fallback;
      if (!nextList.length) {
        return [currentTab];
      }
      if (nextList.some((tab) => tab.fullPath === currentTab.fullPath)) {
        return nextList;
      }
      return [...nextList, currentTab];
    });
  }, [currentTab, defaultTab, showTabBar]);

  useEffect(() => {
    if (!tabList.length) {
      return;
    }

    saveTabsToStorage(tabIdentity, showTabBar ? tabList : tabList.slice(-1));
  }, [identityKey, showTabBar, tabIdentity, tabList]);

  const handleTabsChange = useCallback(
    (tabs: RouteTab[]) => {
      if (tabs.length) {
        setTabList(tabs);
        return;
      }
      if (defaultTab) {
        setTabList([defaultTab]);
      } else {
        setTabList([]);
      }
    },
    [defaultTab]
  );

  const handleCloseTabs = useCallback(
    (tabs: RouteTab[]) => {
      tabs.forEach((tab) => {
        dropScope(getTabCacheKey(tabIdentity, tab.fullPath));
      });
    },
    [dropScope, tabIdentity]
  );

  const handleReloadTab = useCallback(
    (tab: RouteTab) => {
      refreshScope(getTabCacheKey(tabIdentity, tab.fullPath));
    },
    [refreshScope, tabIdentity]
  );

  function onClickMenuItem(key) {
    const currentRoute = flattenRoutes.find((r) => r.key === key);
    const component = currentRoute.component;
    const preload = component.preload();
    NProgress.start();
    preload.then(() => {
      history.push(
        currentRoute.path
          ? `${pathPrefix}${currentRoute.path}`
          : `${pathPrefix}/${key}`
      );
      NProgress.done();
    });
  }

  function toggleCollapse() {
    setCollapsed((collapsed) => !collapsed);
  }

  const paddingLeft = showSiderMenu ? { paddingLeft: menuWidth } : {};
  const paddingTop = showNavbar ? { paddingTop: navbarHeight } : {};
  const paddingStyle = { ...paddingLeft, ...paddingTop };

  const menuElement = (
    <Menu
      mode={showTopMenu ? 'horizontal' : 'vertical'}
      collapse={!showTopMenu && collapsed}
      onClickMenuItem={onClickMenuItem}
      selectedKeys={selectedKeys}
      openKeys={showTopMenu ? undefined : openKeys}
      onClickSubMenu={(_, openKeys) => {
        if (!showTopMenu) {
          setOpenKeys(openKeys);
        }
      }}
    >
      {renderRoutes(locale)(routes, 1)}
    </Menu>
  );

  function renderRoutes(locale) {
    routeMap.current.clear();
    return function travel(_routes: IRoute[], level, parentNode = []) {
      return _routes.map((route) => {
        const { breadcrumb = true, ignore } = route;
        const iconDom = getRouteIcon(route.key, route.icon);
        const titleDom = (
          <>
            {iconDom} {locale[route.name] || route.name}
          </>
        );

        routeMap.current.set(
          `/${route.key}`,
          breadcrumb ? [...parentNode, route.name] : []
        );

        const visibleChildren = (route.children || []).filter((child) => {
          const { ignore, breadcrumb = true } = child;
          if (ignore || route.ignore) {
            routeMap.current.set(
              `/${child.key}`,
              breadcrumb ? [...parentNode, route.name, child.name] : []
            );
          }

          return !ignore;
        });

        if (ignore) {
          return '';
        }
        if (visibleChildren.length) {
          menuMap.current.set(route.key, { subMenu: true });
          return (
            <SubMenu key={route.key} title={titleDom}>
              {travel(visibleChildren, level + 1, [...parentNode, route.name])}
            </SubMenu>
          );
        }
        menuMap.current.set(route.key, { menuItem: true });
        return <MenuItem key={route.key}>{titleDom}</MenuItem>;
      });
    };
  }

  const updateMenuStatus = useCallback(() => {
    const pathKeys = routePathname.split('/');
    const newSelectedKeys: string[] = [];
    const keysToOpen: string[] = [];
    while (pathKeys.length > 0) {
      const currentRouteKey = pathKeys.join('/');
      const menuKey = currentRouteKey.replace(/^\//, '');
      const menuType = menuMap.current.get(menuKey);
      if (menuType && menuType.menuItem) {
        newSelectedKeys.push(menuKey);
      }
      if (menuType && menuType.subMenu) {
        keysToOpen.push(menuKey);
      }
      pathKeys.pop();
    }
    setSelectedKeys(newSelectedKeys);
    setOpenKeys((prevOpenKeys) => {
      const mergedKeys = [...prevOpenKeys];
      keysToOpen.forEach((key) => {
        if (!mergedKeys.includes(key)) {
          mergedKeys.push(key);
        }
      });
      return mergedKeys;
    });
  }, [routePathname]);

  useEffect(() => {
    const routeConfig = routeMap.current.get(routePathname);
    setBreadCrumb(routeConfig || []);
    updateMenuStatus();
  }, [routePathname, updateMenuStatus]);
  return (
    <Layout className={styles.layout}>
      <div
        className={cs(styles['layout-navbar'], {
          [styles['layout-navbar-hidden']]: !showNavbar,
        })}
      >
        <Navbar show={showNavbar} menu={showTopMenu} topMenu={menuElement} />
      </div>
      {userLoading || routeLoading ? (
        <Spin className={styles['spin']} />
      ) : (
        <Layout>
          {showSiderMenu && (
            <Sider
              className={styles['layout-sider']}
              width={menuWidth}
              collapsed={collapsed}
              onCollapse={setCollapsed}
              trigger={null}
              collapsible
              breakpoint="xl"
              style={paddingTop}
            >
              <div className={styles['menu-wrapper']}>{menuElement}</div>
              <div className={styles['collapse-btn']} onClick={toggleCollapse}>
                {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
              </div>
            </Sider>
          )}
          <Layout className={styles['layout-content']} style={paddingStyle}>
            {showTabBar && defaultTab && (
              <TabBar
                defaultTab={defaultTab}
                tabList={tabList.length ? tabList : [defaultTab]}
                routes={flattenRoutes}
                offsetTop={showNavbar ? navbarHeight : 0}
                onTabsChange={handleTabsChange}
                onCloseTabs={handleCloseTabs}
                onReload={handleReloadTab}
              />
            )}
            <div
              className={cs(styles['layout-content-wrapper'], {
                [styles['layout-content-wrapper-with-tab']]:
                  showTabBar && !!defaultTab,
              })}
            >
              {!!breadcrumb.length && (
                <div className={styles['layout-breadcrumb']}>
                  <Breadcrumb>
                    {breadcrumb.map((node, index) => (
                      <Breadcrumb.Item key={index}>
                        {typeof node === 'string' ? locale[node] || node : node}
                      </Breadcrumb.Item>
                    ))}
                  </Breadcrumb>
                </div>
              )}
              <Content>
                <Switch>
                  {flattenRoutes.map((route, index) => {
                    return (
                      <KeepAliveRoute
                        key={index}
                        path={`${pathPrefix}/${route.key}`}
                        component={route.component}
                        identity={tabIdentity}
                      />
                    );
                  })}
                  <Route exact path={pathPrefix || '/'}>
                    {defaultRoute ? (
                      <Redirect to={`${pathPrefix}/${defaultRoute}`} />
                    ) : (
                      <Redirect
                        to={pathPrefix ? `${pathPrefix}/403` : '/403'}
                      />
                    )}
                  </Route>
                  <Route
                    path="*"
                    component={lazyload(() => import('./pages/exception/403'))}
                  />
                </Switch>
              </Content>
            </div>
            {showFooter && <Footer />}
          </Layout>
        </Layout>
      )}
    </Layout>
  );
}

export default PageLayout;
