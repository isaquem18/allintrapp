import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Styles from './styles';

interface CoinProps {
  element: {
    id: string;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_24h: number;
  };
}

export function CoinListComponent(props: CoinProps) {
  const { navigate } = useNavigation<any>();

  const goToDetails = () => {
    navigate({
      name: 'CriptoDetails',
      params: {
        element: props?.element,
      },
    });
  };

  return (
    <Styles.CryptoTouchableOpacity onPress={goToDetails}>
      <Styles.CryptoChildView>
        <Styles.CryptoChild1Image source={{ uri: props?.element?.image }} />
        <Styles.CryptoChild1NamesView>
          <Styles.CoinNameText>{props?.element?.name}</Styles.CoinNameText>
          <Styles.CoinSymbolText>
            {props?.element?.symbol?.toUpperCase()}
          </Styles.CoinSymbolText>
        </Styles.CryptoChild1NamesView>
      </Styles.CryptoChildView>

      <Styles.CryptoChild2View>
        <View>
          <Styles.CoinPriceText>
            $
            {props?.element?.current_price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Styles.CoinPriceText>
          {props?.element?.price_change_percentage_24h < 0 ? (
            <Styles.PriceChangeRedText>
              <MaterialCommunityIcons name="arrow-down" size={16} color="red" />{' '}
              {props?.element?.price_change_percentage_24h?.toFixed(2)}%
            </Styles.PriceChangeRedText>
          ) : (
            <Styles.PriceChangeGreenText>
              <MaterialCommunityIcons
                name="arrow-up"
                size={16}
                color="#B4FF9F"
              />{' '}
              {props?.element?.price_change_percentage_24h?.toFixed(2)}%
            </Styles.PriceChangeGreenText>
          )}
        </View>
      </Styles.CryptoChild2View>
    </Styles.CryptoTouchableOpacity>
  );
}
