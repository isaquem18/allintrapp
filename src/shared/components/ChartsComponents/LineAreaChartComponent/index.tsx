import { useEffect, useState } from 'react';
import { LineChart } from 'react-native-wagmi-charts';

import { createWebSocketConnection } from '@utils/WebsocketConnection';
import { usePricesStream } from '@services/index';
import { useBTCUSDTPrice } from '@context/useBTCUSDTPrice';
import theme from '@styles/theme';

import { useWindowDimensions } from 'react-native';
import * as Styles from './styles';

export function LineAreaChartComponent() {
  const { fetchHistoricalDataBTCUSDTPriceChart } = usePricesStream();
  const [, dispatch] = useBTCUSDTPrice();
  const { width } = useWindowDimensions();

  const [priceData, setPriceData] = useState([
    {
      timestamp: 0,
      value: 0,
    },
  ]);

  useEffect(() => {
    let ws;

    (async () => {
      const url = process.env.WS_BINANCE_API_LINECHART || '';

      await fetchHistoricalDataBTCUSDTPriceChart({ dispatch });

      ws = createWebSocketConnection(url, (data) => {
        const newPrice = parseFloat(data.c);

        setPriceData((prevData: any) => [
          ...prevData.slice(-100),
          { timestamp: Date.now(), value: newPrice },
        ]);
      });
    })();

    return () => {
      ws?.close();
    };
  }, []);

  return (
    <Styles.SafeArea>
      <Styles.Container>
        <Styles.Label>BTC/USDT Price Chart</Styles.Label>
        <Styles.ChartContainer>
          <LineChart.Provider data={priceData}>
            <LineChart height={100} width={width * 0.83}>
              <LineChart.CursorCrosshair />
              <LineChart.Path color={theme.colors.mainPink}>
                <LineChart.PriceText
                  format={({ value }) => {
                    'worklet';

                    const formattedPrice = value;
                    return `$${formattedPrice} USD`;
                  }}
                />
                <LineChart.Gradient />
                <LineChart.CursorLine />
              </LineChart.Path>
            </LineChart>
          </LineChart.Provider>
        </Styles.ChartContainer>
      </Styles.Container>
    </Styles.SafeArea>
  );
}
