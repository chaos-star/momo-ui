import { generate, getRgbStr } from '@arco-design/color';

export function applyThemeColor(themeColor: string, theme = 'light') {
  const list = generate(themeColor, {
    list: true,
    dark: theme === 'dark',
  });

  list.forEach((color, index) => {
    document.body.style.setProperty(
      `--arcoblue-${index + 1}`,
      getRgbStr(color)
    );
  });
}

function changeTheme(theme, themeColor?: string) {
  if (theme === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }

  if (themeColor) {
    applyThemeColor(themeColor, theme);
  }
}

export default changeTheme;
