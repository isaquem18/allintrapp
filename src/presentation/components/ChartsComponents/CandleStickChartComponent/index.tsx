// ChartComponent.tsx
import { useCallback, useRef, useState } from 'react';

import { CandlestickChart } from 'react-native-wagmi-charts';
import { View } from 'react-native';
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

export function CandleStickChartComponent() {
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
          {
            url: 'wss://stream.binance.com:9443/ws/btcusdt@kline_1m',
          },
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
    <View style={styles.mid}>
      <CandlestickChart.Provider data={data}>
        <CandlestickChart width={300} height={120}>
          <CandlestickChart.Candles />
        </CandlestickChart>
      </CandlestickChart.Provider>
    </View>
  );
}
