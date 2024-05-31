import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { CandlestickChart } from 'react-native-wagmi-charts';
import { View, Text, Image, ActivityIndicator } from 'react-native';

import { useQuery } from '@tanstack/react-query';
import { useChartData } from '@usecases/useChartData';
import { styles } from './styles';

export default function CriptoDetails() {
  const { fetchBNBUSDTCandleStickPrices } = useChartData();

  const { data, isLoading } = useQuery({
    queryKey: ['BNBUSDTCandlestick'],
    queryFn: () => {
      return fetchBNBUSDTCandleStickPrices({
        interval: '1m',
        limit: 200,
      });
    },
    refetchInterval: 2000,
  });

  return (
    <View style={styles.container}>
      <View style={styles.uppar}>
        <View style={styles.uppar_image_view}>
          {data?.image && (
            <Image
              style={styles.uppar_image}
              source={{ uri: `${data?.image}` }}
            />
          )}
        </View>
        <View style={styles.uppar_text}>
          <Text style={styles.uppar_text_1}>{data?.name}</Text>
          <Text style={styles.uppar_text_2}>USDUSDT prices</Text>
        </View>
        <View style={styles.upper_status}>
          <View style={styles.upper_status_1}>
            {data?.price_change_percentage_24h < 0 ? (
              <MaterialCommunityIcons name="arrow-down" size={20} color="red" />
            ) : (
              <MaterialCommunityIcons
                name="arrow-up"
                size={20}
                color="#B4FF9F"
              />
            )}
          </View>

          {data?.price_change_percentage_24h < 0 ? (
            <Text style={styles.upper_status_2_red}>
              {data?.price_change_percentage_24h?.toFixed(2)} Hoje
            </Text>
          ) : (
            <Text style={styles.upper_status_2_green}>
              {data?.price_change_percentage_24h?.toFixed(2)} Hoje
            </Text>
          )}
        </View>
      </View>
      <View style={styles.mid}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <CandlestickChart.Provider data={data}>
            <CandlestickChart width={300} height={120}>
              <CandlestickChart.Candles />
            </CandlestickChart>
          </CandlestickChart.Provider>
        )}
      </View>
    </View>
  );
}
