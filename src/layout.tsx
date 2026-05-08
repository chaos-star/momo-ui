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
import {
  IconDashboard,
  IconTag,
  IconMenuFold,
  IconMenuUnfold,
} from '@arco-design/web-react/icon';
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
import {
  RouteTab,
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

function getIconFromKey(key) {
  switch (key) {
    case 'dashboard':
      return <IconDashboard className={styles.icon} />;
    case 'example':
      return <IconTag className={styles.icon} />;
    default:
      return <div className={styles['icon-empty']} />;
  }
}

function getFlattenRoutes(routes) {
  const mod = import.meta.glob('./pages/**/[a-z[]*.tsx');
  const res = [];
  function travel(_routes) {
    _routes.forEach((route) => {
      if (route.key && !route.children) {
        route.component = lazyload(mod[`./pages/${route.key}/index.tsx`]);
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
  const currentComponent = qs.parseUrl(pathname).url.slice(1);
  const locale = useLocale();
  const { settings, userLoading, userInfo } = useSelector(
    (state: GlobalState) => state
  );

  const tabIdentity = useMemo(() => getTabIdentity(userInfo), [userInfo]);
  const identityKey = useMemo(
    () => tabIdentity.tenantCode || 'unknown',
    [tabIdentity.tenantCode]
  );
  const [routes, defaultRoute] = useRoute(userInfo?.permissions);
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
  const defaultTab = useMemo(() => {
    const defaultPath = `/${defaultRoute}`;
    return (
      formatTab(defaultPath, '', flattenRoutes) || {
        title: defaultRoute,
        name: defaultRoute,
        path: defaultPath,
        fullPath: defaultPath,
      }
    );
  }, [defaultRoute, flattenRoutes]);

  useEffect(() => {
    if (!defaultRoute) {
      return;
    }

    const storedTabs = readTabsFromStorage(tabIdentity);
    setTabList(storedTabs?.length ? storedTabs : [defaultTab]);
  }, [defaultRoute, defaultTab, identityKey, tabIdentity]);

  useEffect(() => {
    const currentTab = formatTab(
      location.pathname,
      location.search,
      flattenRoutes
    );
    if (!currentTab) {
      return;
    }

    setTabList((list) => {
      const nextList = list.length ? list : [defaultTab];
      if (nextList.some((tab) => tab.fullPath === currentTab.fullPath)) {
        return nextList;
      }
      return [...nextList, currentTab];
    });
  }, [defaultTab, flattenRoutes, location.pathname, location.search]);

  useEffect(() => {
    if (tabList.length) {
      saveTabsToStorage(tabIdentity, tabList);
    }
  }, [identityKey, tabIdentity, tabList]);

  const handleTabsChange = useCallback(
    (tabs: RouteTab[]) => {
      setTabList(tabs.length ? tabs : [defaultTab]);
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
      history.push(currentRoute.path ? currentRoute.path : `/${key}`);
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
        const iconDom = getIconFromKey(route.key);
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
    const pathKeys = pathname.split('/');
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
  }, [pathname]);

  useEffect(() => {
    const routeConfig = routeMap.current.get(pathname);
    setBreadCrumb(routeConfig || []);
    updateMenuStatus();
  }, [pathname, updateMenuStatus]);
  return (
    <Layout className={styles.layout}>
      <div
        className={cs(styles['layout-navbar'], {
          [styles['layout-navbar-hidden']]: !showNavbar,
        })}
      >
        <Navbar show={showNavbar} menu={showTopMenu} topMenu={menuElement} />
      </div>
      {userLoading ? (
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
            {showTabBar && (
              <TabBar
                routes={flattenRoutes}
                defaultRoute={defaultRoute}
                defaultTab={defaultTab}
                tabList={tabList.length ? tabList : [defaultTab]}
                offsetTop={showNavbar ? navbarHeight : 0}
                onTabsChange={handleTabsChange}
                onCloseTabs={handleCloseTabs}
                onReload={handleReloadTab}
              />
            )}
            <div
              className={cs(styles['layout-content-wrapper'], {
                [styles['layout-content-wrapper-with-tab']]: showTabBar,
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
                        path={`/${route.key}`}
                        component={route.component}
                        identity={tabIdentity}
                      />
                    );
                  })}
                  <Route exact path="/">
                    <Redirect to={`/${defaultRoute}`} />
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
