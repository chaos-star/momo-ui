import React, { useContext } from 'react';
import {
  Tooltip,
  Avatar,
  Select,
  Dropdown,
  Menu,
  Divider,
  Message,
  Button,
} from '@arco-design/web-react';
import {
  IconLanguage,
  IconNotification,
  IconSunFill,
  IconMoonFill,
  IconUser,
  IconSettings,
  IconPoweroff,
  IconExperiment,
  IconDashboard,
  IconTag,
} from '@arco-design/web-react/icon';
import { useSelector } from 'react-redux';
import { GlobalState } from '@/store';
import { GlobalContext } from '@/context';
import useLocale from '@/utils/useLocale';
import SystemLogo from '@/components/SystemLogo';
import MessageBox from '@/components/MessageBox';
import IconButton from './IconButton';
import Settings from '../Settings';
import styles from './style/index.module.less';
import defaultLocale from '@/locale';
import useStorage from '@/utils/useStorage';
import { logout as userLogout } from '@/api/user';
import { ACCESS_TOKEN_KEY, ORGANIZATION_KEY } from '@/api/request';
import {
  USER_PROFILE_KEY,
  getTenantCodeFromPathname,
  readUserProfile,
} from '@/utils/tenant';
import { getAuthResourceCacheKey } from '@/api/auth';
import { patchUserThemeItem } from '@/api/userTheme';
import { patchLocalUserTheme } from '@/utils/userTheme';
import { getSystemName, removeSystemProfile } from '@/utils/systemConfig';

function Navbar({
  show,
  topMenu,
  menu,
}: {
  show: boolean;
  topMenu?: React.ReactNode;
  menu?: boolean;
}) {
  const t = useLocale();
  const userInfo = useSelector((state: GlobalState) => state.userInfo);
  const userProfile = readUserProfile<{ avatar?: string }>();
  const avatar = userProfile?.avatar || userInfo?.avatar;

  const [, setUserStatus] = useStorage('userStatus');
  const [role, setRole] = useStorage('userRole', 'admin');

  const { setLang, lang, theme, setTheme, systemProfile } =
    useContext(GlobalContext);
  const systemName = getSystemName(systemProfile, lang);

  function clearLoginState() {
    const tenantCode = getTenantCodeFromPathname();

    setUserStatus('logout');
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(ORGANIZATION_KEY);
    localStorage.removeItem(USER_PROFILE_KEY);
    if (tenantCode) {
      localStorage.removeItem(getAuthResourceCacheKey(tenantCode));
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('organization');
    localStorage.removeItem('user-theme');
    removeSystemProfile();
  }

  function logout() {
    userLogout()
      .catch(() => undefined)
      .finally(() => {
        clearLoginState();
        window.location.href = '/login';
      });
  }

  function onMenuItemClick(key: string) {
    if (key === 'logout') {
      logout();
    } else {
      Message.info(`You clicked ${key}`);
    }
  }

  if (!show) {
    return (
      <div className={styles['fixed-settings']}>
        <Settings
          trigger={
            <Button icon={<IconSettings />} type="primary" size="large" />
          }
        />
      </div>
    );
  }

  const handleChangeRole = () => {
    const newRole = role === 'admin' ? 'user' : 'admin';
    setRole(newRole);
  };

  const droplist = (
    <Menu onClickMenuItem={onMenuItemClick}>
      <Menu.SubMenu
        key="role"
        title={
          <>
            <IconUser className={styles['dropdown-icon']} />
            <span className={styles['user-role']}>
              {role === 'admin'
                ? t['menu.user.role.admin']
                : t['menu.user.role.user']}
            </span>
          </>
        }
      >
        <Menu.Item onClick={handleChangeRole} key="switch role">
          <IconTag className={styles['dropdown-icon']} />
          {t['menu.user.switchRoles']}
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="setting">
        <IconSettings className={styles['dropdown-icon']} />
        {t['menu.user.setting']}
      </Menu.Item>
      <Menu.SubMenu
        key="more"
        title={
          <div style={{ width: 80 }}>
            <IconExperiment className={styles['dropdown-icon']} />
            {t['message.seeMore']}
          </div>
        }
      >
        <Menu.Item key="workplace">
          <IconDashboard className={styles['dropdown-icon']} />
          {t['menu.dashboard.workplace']}
        </Menu.Item>
      </Menu.SubMenu>

      <Divider style={{ margin: '4px 0' }} />
      <Menu.Item key="logout">
        <IconPoweroff className={styles['dropdown-icon']} />
        {t['navbar.logout']}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <SystemLogo
            profile={systemProfile}
            className={styles['logo-image']}
            alt={systemName}
          />
          <div className={styles['logo-name']}>{systemName}</div>
        </div>
      </div>
      <div className={styles.center}>{menu && topMenu}</div>
      <ul className={styles.right}>
        <li>
          <Select
            triggerElement={<IconButton icon={<IconLanguage />} />}
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'España', value: 'es-ES' },
              { label: 'English', value: 'en-US' },
            ]}
            value={lang}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'br',
            }}
            trigger="hover"
            onChange={(value) => {
              setLang(value);
              patchLocalUserTheme({ path: 'lang', value });
              patchUserThemeItem({ path: 'lang', value }).catch(
                () => undefined
              );
              const nextLang = defaultLocale[value] || defaultLocale['zh-CN'];
              Message.info(
                `${nextLang['message.lang.tips'] || '语言切换至 '}${value}`
              );
            }}
          />
        </li>
        <li>
          <MessageBox>
            <IconButton icon={<IconNotification />} />
          </MessageBox>
        </li>
        <li>
          <Tooltip
            content={
              theme === 'light'
                ? t['settings.navbar.theme.toDark']
                : t['settings.navbar.theme.toLight']
            }
          >
            <IconButton
              icon={theme !== 'dark' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() => {
                const nextTheme = theme === 'light' ? 'dark' : 'light';
                setTheme(nextTheme);
                patchLocalUserTheme({ path: 'theme', value: nextTheme });
                patchUserThemeItem({ path: 'theme', value: nextTheme }).catch(
                  () => undefined
                );
              }}
            />
          </Tooltip>
        </li>
        <Settings />
        {userInfo && (
          <li>
            <Dropdown droplist={droplist} position="br">
              <Avatar size={32} style={{ cursor: 'pointer' }}>
                {avatar && <img alt="avatar" src={avatar} />}
              </Avatar>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
