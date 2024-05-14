/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';
import theme from './theme';

declare module 'styled-components/native' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
