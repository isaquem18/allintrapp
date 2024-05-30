import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '@styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const TAB_WIDTH = (width - 10) / 4;

interface PaddingBottomWrapperProps {
  paddingBottom: number;
}

export const AnimatedView = styled(Animated.View)`
  width: ${TAB_WIDTH}px;
  height: 46px;
  background-color: ${theme.colors.mainPink};
  position: absolute;
  margin: 10px 16px;
  border-radius: 100px;
  overflow: hidden;
  z-index: 100;
`;
export const AnimatedBottomView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 8px;
  flex-direction: row;
`;

export const AnimatedBottomText = styled(Animated.Text)`
  color: ${theme.colors.light};
  box-shadow: 0px 0px 15px ${theme.colors.light};
  font-family: ${theme.fonts.poppins600};
  font-size: ${RFValue(11)}px;
`;

export const BottomTabButton = styled.Pressable.attrs({
  hitSlop: 10,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 100px;
`;

export const PaddingBottomWrapper = styled.View<PaddingBottomWrapperProps>`
  flex-direction: row;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  width: 100%;
  flex: 1;
`;
