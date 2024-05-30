import { useState } from 'react';
import { Button, processColor } from 'react-native';
import { CandleStickChart } from 'react-native-charts-wrapper';
import styled from 'styled-components/native';
import { useQuery } from '@tanstack/react-query';

import { handleUpdateRange } from '@utils/handle';
import { useChartData } from '@usecases/useChartData';
import { SkeletonLoader } from './SkeletonLoader';

const Container = styled.View`
  flex: 1;
`;

const CurrentValueContainer = styled.View`
  align-items: center;
  margin: 10px 0;
`;

const CurrentValue = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const ChartContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

export function CandleStickChartComponent() {
  const { fetchBTCUSDTPrices } = useChartData();
  const [currentPrice] = useState<string>('USD 0.00');
  // const [lastPoint] = useState<{
  //   x: Date;
  //   open: number;
  //   close: number;
  //   high: number;
  //   low: number;
  // }>({
  //   x: new Date(),
  //   open: 0,
  //   close: 0,
  //   high: 0,
  //   low: 0,
  // });
  const [range, setRange] = useState('1m');

  const { isLoading } = useQuery({
    queryKey: ['BTCUSDTChartPrices', range],
    queryFn: () => fetchBTCUSDTPrices({ interval: range, limit: 100 }),
    refetchInterval: 1000 * 60 * 3,
  });

  // useEffect(() => {
  //   let ws;
  //   WEBSOCKET_BTCUSDTPrices().then((value) => {
  //     ws = value.ws;
  //   });

  //   return () => {
  //     ws?.close();
  //   };
  // }, []);

  // const chartData = Array.isArray(data) ? [...data, lastPoint] : [];

  // const candleData = chartData.map((point: BTCUSDTResponseEntity) => ({
  //   shadowH: point.High,
  //   shadowL: point.Low,
  //   open: point.Open,
  //   close: point.Close,
  //   x: new Date(point?.OpenTime)?.getTime() || new Date().getTime(),
  // }));

  return (
    <Container>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <ChartContainer>
          <CandleStickChart
            style={{ flex: 1, width: '100%' }}
            data={{
              dataSets: [
                {
                  values: [],
                  label: 'Candle Data',
                  config: {
                    highlightColor: processColor('white'),
                    shadowColor: processColor('white'),
                    shadowWidth: 1,
                    shadowColorSameAsCandle: true,
                    increasingColor: processColor('green'),
                    increasingPaintStyle: 'FILL',
                    decreasingColor: processColor('red'),
                  },
                },
              ],
            }}
            xAxis={{
              valueFormatter: 'date',
              valueFormatterPattern: 'MM/dd',
              position: 'BOTTOM',
              labelRotationAngle: 45,
              granularity: 1,
            }}
            yAxis={{
              left: {
                drawGridLines: false,
              },
              right: {
                enabled: false,
              },
            }}
            legend={{
              enabled: false,
            }}
            marker={{
              enabled: true,
              markerColor: processColor('#F0C0FF8C'),
              textColor: processColor('white'),
            }}
          />
        </ChartContainer>
      )}

      <CurrentValueContainer>
        <CurrentValue>{currentPrice}</CurrentValue>
      </CurrentValueContainer>
      <ButtonContainer>
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
      </ButtonContainer>
    </Container>
  );
}
