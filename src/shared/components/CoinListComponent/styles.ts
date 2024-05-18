import styled from 'styled-components/native';
import theme from '@styles/theme';

export const CryptoTouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  background-color: ${theme.colors.secondaryBackgroundColor};
  width: 100%;
  border-radius: 13px;
  align-self: center;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px 4px;
`;

export const CryptoChildView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const CoinNameText = styled.Text`
  color: white;
  margin-left: 8px;
  font-size: 20px;
  font-weight: bold;
`;

export const CoinSymbolText = styled.Text`
  color: white;
  margin-left: 8px;
`;

export const CryptoChild2View = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px;
`;

export const CoinPriceText = styled.Text`
  color: #40dfef;
  font-size: 20px;
  align-self: flex-end;
  margin-bottom: 4px;
`;

export const PriceChangeRedText = styled.Text`
  color: red;
  font-size: 14px;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
`;

export const PriceChangeGreenText = styled.Text`
  color: #b4ff9f;
  font-size: 14px;
  align-self: flex-end;
`;

export const CryptoChild1Image = styled.Image`
  margin-left: 10px;
  height: 50px;
  width: 50px;
`;

export const CryptoChild1NamesView = styled.View`
  flex: 1;
`;
