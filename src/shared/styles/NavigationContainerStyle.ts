import { DefaultTheme } from '@react-navigation/native';
import theme from './theme';

export const NavigationContainerTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.mainBackgroundColor,
  },
};
