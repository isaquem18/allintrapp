// ChartComponent.tsx
import { useCallback, useRef, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { CandlestickChart } from 'react-native-wagmi-charts';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { createWebSocketConnection } from '@utils/WebsocketConnection';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

import { styles } from './styles';

interface CandlestickData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export default function CriptoDetails() {
  const [data, setData] = useState<CandlestickData[]>([]);
  const getHistoricalRef = useRef(false);

  const fetchHistoricalData = async () => {
    if (getHistoricalRef.current) return [];
    const endTime = Date.now();
    const startTime = endTime - 1 * 24 * 60 * 1000; // 30 days in milliseconds

    const response = await axios.get('https://api.binance.com/api/v3/klines', {
      params: {
        symbol: 'BTCUSDT',
        interval: '1m',
        startTime,
        endTime,
      },
    });

    const formattedResponse = response.data.map((item: any) => ({
      timestamp: item[0],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    }));

    getHistoricalRef.current = true;
    return formattedResponse;
  };

  useFocusEffect(
    useCallback(() => {
      let ws;
      (async () => {
        let historicalData = await fetchHistoricalData();

        ws = createWebSocketConnection(
          process.env.WS_BINANCE_API_CANDLESTICK,
          (messageData) => {
            if (messageData.k) {
              const newCandle: CandlestickData = {
                timestamp: messageData.k.t,
                open: parseFloat(messageData.k.o),
                high: parseFloat(messageData.k.h),
                low: parseFloat(messageData.k.l),
                close: parseFloat(messageData.k.c),
              };

              setData((prevData) => {
                const updatedData = prevData.slice();
                const lastCandle = updatedData[updatedData.length - 1];

                if (
                  lastCandle &&
                  lastCandle.timestamp === newCandle.timestamp
                ) {
                  updatedData[updatedData.length - 1] = newCandle;
                } else {
                  updatedData.push(newCandle);
                }

                const newData = [...historicalData, ...updatedData];

                historicalData = [];
                return newData;
              });
            }
          },
        );
      })();

      return () => {
        ws?.close();
      };
    }, []),
  );

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
          <Text style={styles.uppar_text_2}>
            Current: $ {data?.current_price}
          </Text>
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
              {data?.price_change_percentage_24h?.toFixed(2)} % Today
            </Text>
          ) : (
            <Text style={styles.upper_status_2_green}>
              {data?.price_change_percentage_24h?.toFixed(2)} % Today
            </Text>
          )}
        </View>
      </View>
      <View style={styles.mid}>
        <CandlestickChart.Provider data={data}>
          <CandlestickChart width={300} height={120}>
            <CandlestickChart.Candles />
          </CandlestickChart>
        </CandlestickChart.Provider>
      </View>
      <View style={styles.timechanger}>
        <TouchableOpacity style={styles.timechanger_touchable}>
          <Text style={styles.timechanger_text}>24h</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timechanger_touchable}>
          <Text style={styles.timechanger_text}>10d</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timechanger_touchable}>
          <Text style={styles.timechanger_text}>1m</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timechanger_touchable}>
          <Text style={styles.timechanger_text}>1y</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
