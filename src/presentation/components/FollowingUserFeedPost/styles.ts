import styled from 'styled-components/native';
import theme from '@styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const ScreenContainer = styled.View`
  width: 100%;
  background-color: ${theme.colors.secondaryBackgroundColor};
  margin-bottom: 14px;
  border-radius: 10px;
  padding: 10px 12px;
  margin-top: 20px;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserDataContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const UserName = styled.Text`
  color: ${theme.colors.light};
  margin-bottom: 2px;
  font-family: ${theme.fonts.poppins600};
  font-size: ${RFValue(11)}px;
`;
export const UserPost = styled.Text`
  color: ${theme.colors.light};
  margin-bottom: 2px;
  margin-top: 20px;
  font-family: ${theme.fonts.poppins600};
  font-size: ${RFValue(11)}px;
`;

export const PostTime = styled.Text`
  color: ${theme.colors.light}60;
  font-family: ${theme.fonts.poppins400};
  font-size: ${RFValue(9.2)}px;
`;

export const DataVisualizationContainer = styled.View``;

export const CallToActionContainer = styled.View``;
