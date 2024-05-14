import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import theme from '@styles/theme';
// import { PiHouseSimple } from 'react-icons/pi';

const { width } = Dimensions.get('screen');

const TAB_BAR_WIDTH = width / 3;
const ANIMATED_PART_HEIGHT = 3;

export const animationStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: theme.colors.light,
  },
  tabButton: {
    flex: 1,
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: TAB_BAR_WIDTH,
    textAlign: 'center',
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: theme.colors.mainBackgroundColor,
  },
  animatedWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const ScreenContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.mainBackgroundColor};
`;

// export const HomeIcon = styled(PiHouseSimple).attrs({
//   width: 20,
//   height: 20,
// })``;

export const ButtonTabContainer = styled.View`
  width: 100%;
  height: 50px;
  background-color: yellow;
  padding: 0px 12px;
`;
export const ButtonTab = styled.View`
  border-radius: 30px;
  background-color: green;
  height: 100%;
`;
