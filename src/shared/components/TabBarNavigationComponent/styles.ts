import styled from 'styled-components/native';
import { BlurView } from '@react-native-community/blur';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

interface PaddingBottomWrapperProps {
  paddingBottom: number;
}

export const TabBarContainer = styled.View`
  width: ${width + 6}px;
  position: absolute;
  bottom: -3px;
  left: -3px;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.light}60;
`;

export const TabBarBlur = styled(BlurView).attrs({
  blurType: 'dark',
  blurAmount: 6,
})`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 14px;
  bottom: 0px;
  flex: 1px;
`;

export const PaddingBottomWrapper = styled.View<PaddingBottomWrapperProps>`
  flex-direction: row;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;
