import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import theme from '@styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

const { width } = Dimensions.get('window');
const TAB_WIDTH = (width - 40) / 4;

export const AnimatedButtonStyle = StyleSheet.create({
  container: {
    width: TAB_WIDTH,
    height: 42,
    backgroundColor: theme.colors.mainPink,
    position: 'absolute',
    marginHorizontal: 0,
    borderRadius: 100,
    zIndex: 10,
    overflow: 'hidden',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },
});

export const AnimatedBottomView = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
  flex-direction: row;
`;

export const AnimatedBottomText = styled.Text`
  color: ${theme.colors.light};
  font-family: ${theme.fonts.poppins600};
  font-size: ${RFValue(9)}px;
`;
