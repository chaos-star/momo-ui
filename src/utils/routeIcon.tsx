import React from 'react';
import * as ArcoIcons from '@arco-design/web-react/icon';
import styles from '@/style/layout.module.less';

export function getIconComponentName(icon?: string) {
  if (!icon) {
    return '';
  }

  if (icon.startsWith('Icon')) {
    return icon;
  }

  const pascalIcon = icon
    .replace(/^icon[-_]?/i, '')
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');

  return pascalIcon ? `Icon${pascalIcon}` : '';
}

export function getRouteIcon(key: string, icon?: string) {
  const iconKey = icon || key;
  const IconComponent = ArcoIcons[
    getIconComponentName(iconKey)
  ] as React.ComponentType<{ className?: string }>;

  return IconComponent ? (
    <IconComponent className={styles.icon} />
  ) : (
    <div className={styles['icon-empty']} />
  );
}
