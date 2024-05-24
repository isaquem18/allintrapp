import * as SafeArea from 'react-native-safe-area-context';

import * as Styles from './styles';

export default function WalletScreenTabHeader() {
  const insets = SafeArea.useSafeAreaInsets();

  return (
    <Styles.Container marginTop={insets.top || 60}>
      <Styles.InnerContainer>
        <Styles.LeftHeaderContainer>
          <Styles.MinLogoIconCircle>
            <Styles.MinLogoIcon />
          </Styles.MinLogoIconCircle>
          <Styles.LeftTextContainer>
            <Styles.AllintraText>Allintra</Styles.AllintraText>
            <Styles.CurrencyText>0.255 USDT</Styles.CurrencyText>
          </Styles.LeftTextContainer>
        </Styles.LeftHeaderContainer>
        <Styles.RightHeaderContainer>
          <Styles.CurrentWalletAmount>R$ 100.000,00</Styles.CurrentWalletAmount>
          <Styles.PastMounthBalance>+ 10%</Styles.PastMounthBalance>
        </Styles.RightHeaderContainer>
      </Styles.InnerContainer>
    </Styles.Container>
  );
}
