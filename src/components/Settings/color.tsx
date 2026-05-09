import React from 'react';
import { Trigger, Typography } from '@arco-design/web-react';
import { SketchPicker } from 'react-color';
import { generate } from '@arco-design/color';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../../store';
import useLocale from '@/utils/useLocale';
import { patchUserThemeItem } from '@/api/userTheme';
import { applyThemeColor } from '@/utils/changeTheme';
import { patchLocalUserTheme } from '@/utils/userTheme';
import styles from './style/color-panel.module.less';

const presetColors = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#165DFF',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

function ColorPanel() {
  const theme =
    document.querySelector('body').getAttribute('arco-theme') || 'light';
  const settings = useSelector((state: GlobalState) => state.settings);
  const locale = useLocale();
  const themeColor = settings.themeColor;
  const list = generate(themeColor, { list: true });
  const dispatch = useDispatch();

  return (
    <div>
      <Trigger
        trigger="hover"
        position="bl"
        popup={() => (
          <SketchPicker
            color={themeColor}
            presetColors={presetColors}
            onChangeComplete={(color) => {
              const newColor = color.hex;
              dispatch({
                type: 'update-settings',
                payload: { settings: { ...settings, themeColor: newColor } },
              });
              patchLocalUserTheme({
                path: 'settings.themeColor',
                value: newColor,
              });
              patchUserThemeItem({
                path: 'settings.themeColor',
                value: newColor,
              }).catch(() => undefined);
              applyThemeColor(newColor, theme);
            }}
          />
        )}
      >
        <div className={styles.input}>
          <div
            className={styles.color}
            style={{ backgroundColor: themeColor }}
          />
          <span>{themeColor}</span>
        </div>
      </Trigger>
      <ul className={styles.ul}>
        {list.map((item, index) => (
          <li
            key={index}
            className={styles.li}
            style={{ backgroundColor: item }}
          />
        ))}
      </ul>
      <Typography.Paragraph style={{ fontSize: 12 }}>
        {locale['settings.color.tooltip']}
      </Typography.Paragraph>
    </div>
  );
}

export default ColorPanel;
