import theme from '@styles/theme';
import { Animated } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import SettingsIconSVG from '@assets/icons/settings.svg';

interface SwitchProps {
  isEnabled: boolean;
}

export const SwitchContainer = styled.View<SwitchProps>`
  width: 80px;
  height: 32px;
  border-radius: 25px;
  background-color: ${theme.colors.light}40;
  justify-content: center;
`;

export const SwitchKnob = styled(Animated.View)`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightGreen};
`;

export const SettingsIcon = styled(SettingsIconSVG).attrs({
  width: 20,
  height: 20,
  color: theme.colors.mainBackgroundColor,
  opacity: 0.7,
})``;

export const Label = styled(Animated.Text)`
  font-size: ${RFValue(9)}px;
  color: ${theme.colors.lightGreen};
  font-family: ${theme.fonts.poppins600};
  position: absolute;
`;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
