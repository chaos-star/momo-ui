import './style/global.less';
import React, { useEffect } from 'react';
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
import { readUserProfile, getTenantCodeFromPathname } from './utils/tenant';
import { getAuthContextResource } from './api/auth';
import './mock';

const store = createStore(rootReducer);

function AppContent() {
  const dispatch = useDispatch();
  const [lang, setLang] = useStorage('arco-lang', 'en-US');
  const [theme, setTheme] = useStorage('arco-theme', 'light');
  const settings = useSelector((state: GlobalState) => state.settings);

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
      fetchUserInfo();
    } else if (!isLoginPage && !is403Page) {
      window.location.pathname = '/login';
    }
  }, []);

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
