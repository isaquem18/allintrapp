import { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { createWebSocketConnection } from '@utils/WebsocketConnection';
import { useQuery } from '@tanstack/react-query';

import { useChartData } from '@usecases/useChartData/index';
import { formatCurrency } from '@utils/formatCurrency';
import { handleUpdateRange } from '@utils/handle';

import { SkeletonLoader } from './SkeletonLoader';

import * as Styles from './styles';

export function CandleStickChartComponent2() {
  const { fetchBNBUSDTPrices } = useChartData();
  const [currentPrice, setCurrentPrice] = useState<string>('USD 0.00');
  const [lastPoint, setLastPoint] = useState<{ x: Date; y: number }>({
    x: new Date(),
    y: 0,
  });
  const [range, setRange] = useState('1m');
  const { data, isLoading } = useQuery({
    queryKey: ['BNBUSDTChartPrices', range],
    queryFn: () => {
      return fetchBNBUSDTPrices({
        interval: range,
        limit: 100,
      });
    },
    refetchInterval: 1000 * 60,
  });

  useEffect(() => {
    const ws = createWebSocketConnection(
      {
        url: `${process.env.BINANCE_WS_URL}/bnbusdt@trade`,
      },
      (message) => {
        const newPrice = parseFloat(message.p);
        const newDataPoint = { x: new Date(message.T), y: newPrice };

        setLastPoint(newDataPoint);
        setCurrentPrice(formatCurrency(newPrice, 'USD', 'en-US'));
      },
    );

    return () => {
      ws.close();
    };
  }, []);

  const chartData = Array.isArray(data) ? [...data, lastPoint] : [];

  return (
    <Styles.Container>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Styles.LineChartComponent data={chartData} />
      )}

      <Styles.CurrentValueContainer>
        <Styles.CurrentValue>{currentPrice}</Styles.CurrentValue>
      </Styles.CurrentValueContainer>
      <Styles.ButtonContainer>
        <Button
          title="1 Day"
          onPress={() => setRange(handleUpdateRange('1d'))}
        />
        <Button
          title="5 Days"
          onPress={() => setRange(handleUpdateRange('5d'))}
        />
        <Button
          title="1 Month"
          onPress={() => setRange(handleUpdateRange('1m'))}
        />
        <Button
          title="6 Months"
          onPress={() => setRange(handleUpdateRange('6m'))}
        />
      </Styles.ButtonContainer>
    </Styles.Container>
  );
}
