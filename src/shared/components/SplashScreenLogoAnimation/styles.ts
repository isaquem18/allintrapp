import styled from 'styled-components/native';
import theme from '@styles/theme';
import { StyleProp, ViewStyle } from 'react-native';

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.mainBackgroundColor};
`;

export const LottieViewStyles: StyleProp<ViewStyle> = {
  width: '100%',
  height: '100%',
};
