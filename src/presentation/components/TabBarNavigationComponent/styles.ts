import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import { Dimensions } from 'react-native';
import theme from '@styles/theme';

const { width } = Dimensions.get('screen');

export const TabBarContainer = styled.View`
  width: ${width + 6}px;
  position: absolute;
  bottom: -15px;
  left: -3px;
  overflow: hidden;
  border-radius: 30px;
  border: 1.2px solid ${theme.colors.light}20;
  align-items: center;
`;

export const TabBarBlur = styled(BlurView).attrs({
  blurType: 'dark',
  blurAmount: 5,
})`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const TabBarBlurView = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 14px;
  bottom: 0px;
  width: ${width}px;
`;
