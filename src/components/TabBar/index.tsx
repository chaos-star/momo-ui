import React from 'react';
import { Affix, Dropdown, Menu } from '@arco-design/web-react';
import {
  IconClose,
  IconFolderDelete,
  IconRefresh,
  IconSwap,
  IconToLeft,
  IconToRight,
} from '@arco-design/web-react/icon';
import { useHistory, useLocation } from 'react-router-dom';
import cs from 'classnames';
import { IRoute } from '@/routes';
import { RouteTab } from '@/utils/tabStorage';
import { getRouteIcon } from '@/utils/routeIcon';
import useLocale from '@/utils/useLocale';
import { stripTenantFromPathname } from '@/utils/tenant';
import styles from './style.module.less';

interface TabBarProps {
  defaultTab: RouteTab;
  tabList: RouteTab[];
  routes: IRoute[];
  offsetTop?: number;
  onTabsChange: (tabs: RouteTab[]) => void;
  onCloseTabs?: (tabs: RouteTab[]) => void;
  onReload?: (tab: RouteTab) => void;
}

const Action = {
  Reload: 'reload',
  Current: 'current',
  Left: 'left',
  Right: 'right',
  Others: 'others',
  All: 'all',
};

export function findRoute(pathname: string, routes: IRoute[]) {
  const routePathname = stripTenantFromPathname(pathname);
  return routes.find((route) => routePathname === `/${route.key}`);
}

export function formatTab(
  pathname: string,
  search: string,
  routes: IRoute[]
): RouteTab | null {
  const route = findRoute(pathname, routes);
  if (!route) {
    return null;
  }

  const routePathname = stripTenantFromPathname(pathname);

  return {
    title: route.name,
    name: routePathname.replace(/^\//, ''),
    path: pathname,
    fullPath: `${pathname}${search || ''}`,
  };
}

function TabBar({
  defaultTab,
  tabList,
  routes,
  offsetTop = 0,
  onTabsChange,
  onCloseTabs,
  onReload,
}: TabBarProps) {
  const history = useHistory();
  const location = useLocation();
  const locale = useLocale();
  const currentFullPath = `${location.pathname}${location.search || ''}`;

  function getTabRoute(tab: RouteTab) {
    return findRoute(tab.path, routes);
  }

  function getTabTitle(tab: RouteTab) {
    const route = getTabRoute(tab);
    const title = route?.name || tab.title;
    return locale[title] || title;
  }

  function getTabIcon(tab: RouteTab) {
    const route = getTabRoute(tab);
    return getRouteIcon(route?.key || tab.name, route?.icon);
  }

  function goto(tab: RouteTab) {
    if (tab.fullPath !== currentFullPath) {
      history.push(tab.fullPath);
    }
  }

  function closeTab(tab: RouteTab, index: number) {
    if (index === 0) {
      return;
    }

    const nextList = tabList.filter((_, idx) => idx !== index);
    onCloseTabs?.([tab]);
    onTabsChange(nextList);

    if (tab.fullPath === currentFullPath) {
      const latest = nextList[index - 1] || nextList[0];
      history.push(latest.fullPath);
    }
  }

  function findCurrentRouteIndex(list = tabList) {
    return list.findIndex((tab) => tab.fullPath === currentFullPath);
  }

  function updateTabs(nextList: RouteTab[], removedTabs: RouteTab[]) {
    if (removedTabs.length) {
      onCloseTabs?.(removedTabs);
    }
    onTabsChange(nextList);
  }

  function handleAction(action: string, tab: RouteTab, index: number) {
    const currentIndex = findCurrentRouteIndex();

    if (action === Action.Current) {
      closeTab(tab, index);
      return;
    }

    if (action === Action.Left) {
      const nextList = tabList.filter((_, idx) => idx === 0 || idx >= index);
      const removedTabs = tabList.filter((_, idx) => idx > 0 && idx < index);
      updateTabs(nextList, removedTabs);
      if (currentIndex > 0 && currentIndex < index) {
        history.push(tab.fullPath);
      }
      return;
    }

    if (action === Action.Right) {
      const nextList = tabList.filter((_, idx) => idx <= index);
      const removedTabs = tabList.filter((_, idx) => idx > index);
      updateTabs(nextList, removedTabs);
      if (currentIndex > index) {
        history.push(tab.fullPath);
      }
      return;
    }

    if (action === Action.Others) {
      const nextList = tabList.filter((_, idx) => idx === 0 || idx === index);
      const removedTabs = tabList.filter(
        (_, idx) => idx !== 0 && idx !== index
      );
      updateTabs(nextList, removedTabs);
      history.push(tab.fullPath);
      return;
    }

    if (action === Action.Reload) {
      onReload?.(tab);
      return;
    }

    const removedTabs = tabList.filter((_, idx) => idx !== 0);
    updateTabs([defaultTab], removedTabs);
    history.push(defaultTab.fullPath);
  }

  function renderDroplist(tab: RouteTab, index: number) {
    const disabledReload = tab.fullPath !== currentFullPath;
    const disabledCurrent = index === 0;
    const disabledLeft = index <= 1;
    const disabledRight = index === tabList.length - 1;

    return (
      <Menu onClickMenuItem={(key) => handleAction(key, tab, index)}>
        <Menu.Item key={Action.Reload} disabled={disabledReload}>
          <IconRefresh />
          <span className={styles['dropdown-label']}>重新加载</span>
        </Menu.Item>
        <Menu.Item
          key={Action.Current}
          disabled={disabledCurrent}
          className={styles['separate-line']}
        >
          <IconClose />
          <span className={styles['dropdown-label']}>关闭当前标签页</span>
        </Menu.Item>
        <Menu.Item key={Action.Left} disabled={disabledLeft}>
          <IconToLeft />
          <span className={styles['dropdown-label']}>关闭左侧标签页</span>
        </Menu.Item>
        <Menu.Item
          key={Action.Right}
          disabled={disabledRight}
          className={styles['separate-line']}
        >
          <IconToRight />
          <span className={styles['dropdown-label']}>关闭右侧标签页</span>
        </Menu.Item>
        <Menu.Item
          key={Action.Others}
          disabled={tabList.length <= 2 && index !== 0}
        >
          <IconSwap />
          <span className={styles['dropdown-label']}>关闭其它标签页</span>
        </Menu.Item>
        <Menu.Item key={Action.All} disabled={tabList.length <= 1}>
          <IconFolderDelete />
          <span className={styles['dropdown-label']}>关闭全部标签页</span>
        </Menu.Item>
      </Menu>
    );
  }

  return (
    <div className={styles['tab-bar-container']}>
      <Affix offsetTop={offsetTop}>
        <div className={styles['tab-bar-box']}>
          <div className={styles['tab-bar-scroll']}>
            <div className={styles['tags-wrap']}>
              {tabList.map((tab, index) => (
                <Dropdown
                  key={tab.fullPath}
                  droplist={renderDroplist(tab, index)}
                  trigger="contextMenu"
                  position="bl"
                >
                  <span
                    className={cs(
                      'arco-tag arco-tag-size-medium arco-tag-checked',
                      styles['tab-tag'],
                      {
                        [styles['link-activated']]:
                          tab.fullPath === currentFullPath,
                      }
                    )}
                    onClick={() => goto(tab)}
                  >
                    <span className={styles['tag-link']}>
                      {getTabIcon(tab)}
                      {getTabTitle(tab)}
                    </span>
                    {index !== 0 && (
                      <span
                        className="arco-icon-hover arco-tag-icon-hover arco-icon-hover-size-medium arco-tag-close-btn"
                        onClick={(event) => {
                          event.stopPropagation();
                          closeTab(tab, index);
                        }}
                      >
                        <IconClose />
                      </span>
                    )}
                  </span>
                </Dropdown>
              ))}
            </div>
          </div>
          <div className={styles['tag-bar-operation']} />
        </div>
      </Affix>
    </div>
  );
}

export default TabBar;
