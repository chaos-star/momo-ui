import React, { useContext, useEffect } from 'react';
import Footer from '@/components/Footer';
import SystemLogo from '@/components/SystemLogo';
import { GlobalContext } from '@/context';
import { getSystemName } from '@/utils/systemConfig';
import LoginForm from './form';
import LoginBanner from './banner';
import styles from './style/index.module.less';

function Login() {
  const { lang, systemProfile } = useContext(GlobalContext);
  const systemName = getSystemName(systemProfile, lang);

  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <SystemLogo
          profile={systemProfile}
          className={styles['logo-image']}
          alt={systemName}
        />
        <div className={styles['logo-text']}>{systemName}</div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-inner']}>
          <LoginBanner />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
Login.displayName = 'LoginPage';

export default Login;
