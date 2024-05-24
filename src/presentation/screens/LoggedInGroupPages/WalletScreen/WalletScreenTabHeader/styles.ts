import theme from '@styles/theme';
import styled from 'styled-components/native';

import MinLogoIconSVG from '@assets/logo/logo-min.svg';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View<ContainerProps>`
  height: 90px;
  width: 100%;
  margin-top: ${({ marginTop }) => marginTop}px;
  padding: 6px ${theme.values.paddingHorizontal}px
    ${theme.values.paddingHorizontal}px ${theme.values.paddingHorizontal}px;
`;

export const InnerContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: 10px;
  flex-direction: row;
  padding: 0px ${theme.values.paddingHorizontal}px;
`;

export const LeftHeaderContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

export const RightHeaderContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const MinLogoIconCircle = styled.View`
  background-color: ${theme.colors.mainPink};
  border-radius: 100px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
`;

export const MinLogoIcon = styled(MinLogoIconSVG).attrs({
  width: 20,
  height: 20,
})`
  margin-bottom: 1px;
  margin-right: 2px;
`;

export const LeftTextContainer = styled.View`
  margin-left: 12px;
`;

export const AllintraText = styled.Text`
  color: ${theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.poppins400};
`;

export const CurrencyText = styled.Text`
  color: ${theme.colors.gray500};
  font-size: ${RFValue(9.5)}px;
  font-family: ${theme.fonts.poppins400};
  opacity: 0.6;
`;

export const CurrentWalletAmount = styled.Text`
  color: ${theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${theme.fonts.poppins800};
`;

export const PastMounthBalance = styled.Text`
  color: ${theme.colors.success};
  font-size: ${RFValue(10)}px;
  font-family: ${theme.fonts.poppins400};
`;
