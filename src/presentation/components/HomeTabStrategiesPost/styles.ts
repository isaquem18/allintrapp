import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import theme from '@styles/theme';
import ArrowUpIconSVG from '@assets/icons/arrowUP.svg';
import ArrowDownIconSVG from '@assets/icons/arrowDown.svg';
import ViewIconSVG from '@assets/icons/eye.svg';

interface CryptoPriceTextAndAmountOfInverstorsProps {
  gain: boolean;
}

export const ArrowUpIcon = styled(ArrowUpIconSVG).attrs({
  width: 12,
  height: 12,
  color: theme.colors.success,
})`
  margin-right: 4px;
`;

export const ArrowDownIcon = styled(ArrowDownIconSVG).attrs({
  width: 12,
  height: 12,
  color: theme.colors.negative,
})`
  margin-right: 4px;
`;

export const CartStrategieContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondaryBackgroundColor};
  border-radius: ${RFValue(10)}px;
  border: 1px solid ${theme.colors.light}30;
  margin: ${theme.values.paddingHorizontal / 2}px;
  overflow: hidden;
`;

export const CartStrategieHeader = styled.View`
  padding: ${RFValue(10)}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const PercentageResultPercentage = styled.View`
  background-color: ${theme.colors.gray500};
  border-radius: ${30}px;
  padding: 8px 10px;
  background-color: ${theme.colors.mainBackgroundColor};
  flex-direction: row;
  align-items: center;
`;

export const PercentageResultPercentageText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${theme.colors.light};
`;

export const ChartContainer = styled.View`
  height: 100px;
  background-color: ${theme.colors.gray200}30;
`;

export const FooterContainer = styled.View`
  padding: 0px 14px;
`;

export const CryptoTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 0px 2px 0px;
`;

export const CryptoTitle = styled.Text`
  font-size: ${RFValue(11)}px;
  color: ${theme.colors.light};
  font-family: ${theme.fonts.poppins800};
`;

export const CryptoSubtitle = styled.Text`
  font-size: ${RFValue(9.2)}px;
  color: ${theme.colors.gray500};
`;

export const CryptoPriceContainer = styled.View`
  flex-direction: row;
`;

export const CryptoPriceTextAndAmountOfInverstors = styled.Text<CryptoPriceTextAndAmountOfInverstorsProps>`
  font-size: ${RFValue(9.3)}px;
  color: ${({ gain }) => (gain ? theme.colors.success : theme.colors.negative)};
  font-family: ${theme.fonts.poppins800};
`;

export const ButtonsActionContainer = styled.View`
  flex-direction: row;
  padding: 0px;
  margin-top: 14px;
  border-top-width: 1px;
  border-top-color: ${theme.colors.light}30;
`;

export const InvestButton = styled.TouchableOpacity.attrs({
  activeOpacity: theme.values.touchOpacity,
})`
  background-color: ${theme.colors.flatSuccess};
  flex: 1;
  padding: 24px 0px;
  align-items: center;
  justify-content: center;
`;

export const ViewButton = styled.TouchableOpacity.attrs({
  activeOpacity: theme.values.touchOpacity,
})`
  padding: 0px 24px;
  justify-content: center;
`;

export const InvestButtonText = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${theme.colors.mainBackgroundColor};
`;

export const ViewSVGIcon = styled(ViewIconSVG).attrs({
  width: 20,
  height: 20,
  color: theme.colors.light,
})``;
