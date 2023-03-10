import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
  },
};

const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  },
};

const ThemeGenerator = (mode: 'light' | 'dark') => {
  if (mode === 'dark') {
    return DarkTheme;
  }

  return LightTheme;
};

export { ThemeGenerator };
