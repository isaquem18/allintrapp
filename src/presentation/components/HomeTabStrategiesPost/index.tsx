import * as Styles from './styles';

interface CoinProps {
  element: {
    id: string;
    currentPrice: string;
    positive: boolean;
  };
}

const defaultValue = {
  id: '1',
  currentPrice: '',
  positive: true,
};

export function HomeTabStrategiesPost({ element = defaultValue }: CoinProps) {
  return (
    <Styles.CartStrategieContainer>
      <Styles.CartStrategieHeader>
        <Styles.PercentageResultPercentage>
          {element?.positive ? (
            <Styles.ArrowUpIcon />
          ) : (
            <Styles.ArrowDownIcon />
          )}
          <Styles.PercentageResultPercentageText>
            {element?.positive ? '+15% Profit' : '-15% Loss'}
          </Styles.PercentageResultPercentageText>
        </Styles.PercentageResultPercentage>
      </Styles.CartStrategieHeader>
      <Styles.ChartContainer />
      <Styles.FooterContainer>
        <Styles.CryptoTitleContainer>
          <Styles.CryptoTitle>BNBERP22</Styles.CryptoTitle>
          <Styles.CryptoSubtitle>BNB/USDT</Styles.CryptoSubtitle>
        </Styles.CryptoTitleContainer>
        <Styles.CryptoPriceContainer>
          <Styles.CryptoPriceTextAndAmountOfInverstors gain={element?.positive}>
            {element?.currentPrice} {'  '}/{'  '}2k investors
          </Styles.CryptoPriceTextAndAmountOfInverstors>
        </Styles.CryptoPriceContainer>
      </Styles.FooterContainer>
      <Styles.ButtonsActionContainer>
        <Styles.InvestButton>
          <Styles.InvestButtonText>Invest</Styles.InvestButtonText>
        </Styles.InvestButton>
        <Styles.ViewButton>
          <Styles.ViewSVGIcon />
        </Styles.ViewButton>
      </Styles.ButtonsActionContainer>
    </Styles.CartStrategieContainer>
  );
}
