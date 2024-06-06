import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import theme from '@styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('screen');

interface PaddingBottomWrapperProps {
  paddingBottom: number;
}

export const AnimatedView = styled(Animated.View)`
  width: 80%;
  height: 90px;
  background-color: ${theme.colors.mainPink};
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  z-index: 100;
  align-self: center;
`;
export const AnimatedBottomView = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0px;
  flex-direction: column;
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
  width: 100%;
`;

export const PaddingBottomWrapper = styled.View<PaddingBottomWrapperProps>`
  flex-direction: column;
  width: 100%;
  height: 500px;
  max-height: ${height / 2}px;
`;
