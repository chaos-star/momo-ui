import React, { useContext, useEffect } from 'react';
import Footer from '@/components/Footer';
import Logo from '@/assets/logo.svg';
import { GlobalContext } from '@/context';
import { getSystemName } from '@/utils/systemConfig';
import LoginForm from './form';
import LoginBanner from './banner';
import styles from './style/index.module.less';

function Login() {
  const { lang, systemProfile } = useContext(GlobalContext);
  const systemName = getSystemName(systemProfile, lang);
  const logoUrl = systemProfile?.logoUrl;

  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {logoUrl ? (
          <img
            className={styles['logo-image']}
            src={logoUrl}
            alt={systemName}
          />
        ) : (
          <Logo />
        )}
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
