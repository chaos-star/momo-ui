import './style/global.less';
import React, { useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AliveScope } from 'react-activation';
import rootReducer, { GlobalState } from './store';
import PageLayout from './layout';
import { GlobalContext } from './context';
import Login from './pages/login';
import Exception403 from './pages/exception/403';
import checkLogin from './utils/checkLogin';
import changeTheme from './utils/changeTheme';
import useStorage from './utils/useStorage';
import {
  readUserProfile,
  getTenantCodeFromPathname,
  getDefaultTenantCode,
} from './utils/tenant';
import { getAuthContextResource } from './api/auth';
import {
  readUserTheme,
  writeUserTheme,
  UserThemeConfig,
} from './utils/userTheme';
import {
  DEFAULT_SYSTEM_PROFILE,
  SystemConfigProfile,
  normalizeSystemProfile,
  readSystemProfile,
  writeSystemProfile,
  getSystemTitle,
  applySystemFavicon,
} from './utils/systemConfig';
import { getPublicSystemConfig } from './api/system';
import './mock';

const store = createStore(rootReducer);

function AppContent() {
  const dispatch = useDispatch();
  const [lang, setLangStorage] = useStorage('arco-lang', 'en-US');
  const [theme, setThemeStorage] = useStorage('arco-theme', 'light');
  const settings = useSelector((state: GlobalState) => state.settings);
  const [systemProfile, setSystemProfileState] = useState<SystemConfigProfile>(
    () => normalizeSystemProfile(readSystemProfile() || DEFAULT_SYSTEM_PROFILE)
  );
  const refreshSystemProfileRef =
    React.useRef<Promise<SystemConfigProfile | undefined>>();

  function setSystemProfile(value: SystemConfigProfile) {
    setSystemProfileState(normalizeSystemProfile(value));
  }

  const refreshSystemProfile = useCallback(async () => {
    if (refreshSystemProfileRef.current) {
      return refreshSystemProfileRef.current;
    }

    refreshSystemProfileRef.current = getPublicSystemConfig()
      .then((value) => {
        const profile = normalizeSystemProfile(value);
        setSystemProfile(profile);
        if (checkLogin()) {
          writeSystemProfile(profile);
        }
        return profile;
      })
      .catch(() => undefined)
      .finally(() => {
        refreshSystemProfileRef.current = undefined;
      });

    return refreshSystemProfileRef.current;
  }, []);

  function applyUserTheme(userTheme: UserThemeConfig) {
    writeUserTheme(userTheme);
    setLangStorage(userTheme.lang);
    setThemeStorage(userTheme.theme);
    dispatch({
      type: 'update-settings',
      payload: { settings: userTheme.settings },
    });
    dispatch({
      type: 'update-theme',
      payload: { theme: userTheme.theme },
    });
    changeTheme(userTheme.theme, userTheme.settings.themeColor);
  }

  function setLang(value: string) {
    const userTheme = writeUserTheme({ ...readUserTheme(), lang: value });
    setLangStorage(userTheme.lang);
  }

  function setTheme(value: string) {
    const userTheme = writeUserTheme({ ...readUserTheme(), theme: value });
    setThemeStorage(userTheme.theme);
    dispatch({
      type: 'update-theme',
      payload: { theme: userTheme.theme },
    });
    changeTheme(userTheme.theme, userTheme.settings.themeColor);
  }

  function getArcoLocale() {
    switch (lang) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  async function fetchUserInfo() {
    store.dispatch({
      type: 'update-userInfo',
      payload: { userLoading: true },
    });

    const tenantCode = getTenantCodeFromPathname();
    try {
      const resource = tenantCode
        ? await getAuthContextResource(tenantCode)
        : null;
      store.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: {
            ...(readUserProfile() || {}),
            ...(resource?.profile || {}),
            permissions: resource?.permissions || [],
            fieldPolicies: resource?.fieldPolicies || {},
          },
          userLoading: false,
        },
      });
    } catch {
      store.dispatch({
        type: 'update-userInfo',
        payload: {
          userInfo: readUserProfile() || { permissions: {} },
          userLoading: false,
        },
      });
    }
  }

  useEffect(() => {
    const pathname = window.location.pathname;
    const isLoginPage = pathname === '/login' || pathname.endsWith('/login');
    const is403Page = pathname === '/403' || pathname.endsWith('/403');

    if (checkLogin()) {
      const tenantCode = getTenantCodeFromPathname(pathname);

      if (!tenantCode && !isLoginPage && !is403Page) {
        const defaultTenantCode = getDefaultTenantCode();
        window.location.replace(
          defaultTenantCode ? `/${defaultTenantCode}${pathname}` : '/403'
        );
        return;
      }

      const userTheme = readUserTheme();
      writeUserTheme(userTheme);
      setLangStorage(userTheme.lang);
      setThemeStorage(userTheme.theme);
      store.dispatch({
        type: 'update-settings',
        payload: { settings: userTheme.settings },
      });
      store.dispatch({
        type: 'update-theme',
        payload: { theme: userTheme.theme },
      });
      changeTheme(userTheme.theme, userTheme.settings.themeColor);
      fetchUserInfo();
    } else {
      refreshSystemProfile();
      if (!isLoginPage && !is403Page) {
        window.location.pathname = '/login';
      }
    }
    // 初始化逻辑只应在应用启动时执行一次。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.title = getSystemTitle(systemProfile, lang);
    applySystemFavicon(systemProfile);
  }, [lang, systemProfile]);

  useEffect(() => {
    changeTheme(theme, settings.themeColor);
    dispatch({
      type: 'update-theme',
      payload: { theme },
    });
  }, [dispatch, settings.themeColor, theme]);

  const contextValue = {
    lang,
    setLang,
    theme,
    setTheme,
    applyUserTheme,
    systemProfile,
    setSystemProfile,
    refreshSystemProfile,
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        locale={getArcoLocale()}
        componentConfig={{
          Card: {
            bordered: false,
          },
          List: {
            bordered: false,
          },
          Table: {
            border: false,
          },
        }}
      >
        <GlobalContext.Provider value={contextValue}>
          <AliveScope>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/:tenantCode/login" component={Login} />
              <Route path="/403" component={Exception403} />
              <Route path="/:tenantCode/403" component={Exception403} />
              <Route path="/" component={PageLayout} />
            </Switch>
          </AliveScope>
        </GlobalContext.Provider>
      </ConfigProvider>
    </BrowserRouter>
  );
}

function Index() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
