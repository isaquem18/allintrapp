import { processColor } from 'react-native';
import styled from 'styled-components/native';
import { LineChart } from 'react-native-charts-wrapper';
import { RFValue } from 'react-native-responsive-fontsize';

import theme from '@styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const LineChartComponent = styled(LineChart).attrs(({ data }) => ({
  chartDescription: { text: '' },
  drawMarkers: true,
  data: {
    dataSets: [
      {
        values: data?.map((point) => ({
          x: point.x.getTime(),
          y: point.y,
        })),
        label: 'BNBUSDT',
        config: {
          mode: 'CUBIC_BEZIER', // Smooth lines
          drawValues: false,
          lineWidth: 2,
          drawCircles: false,
          color: processColor(theme.colors.success),
          drawFilled: true,
          fillColor: processColor(theme.colors.success),
          fillAlpha: 30,
          valueTextSize: 15,
        },
      },
    ],
  },
  xAxis: {
    valueFormatter: 'date',
    valueFormatterPattern: 'HH:mm',
    position: 'BOTTOM',
    drawGridLines: false,
    avoidFirstLastClipping: true,
  },
  yAxis: {
    left: { drawGridLines: false },
    right: { enabled: false },
  },
}))`
  width: 100%;
  height: 200px;
`;

export const CurrentValueContainer = styled.View`
  width: 100%;
  height: 200px;

  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const CurrentValue = styled.Text`
  color: ${theme.colors.light};
  font-size: ${RFValue(18)}px;
  text-shadow: 0px 0px 7px #000000;
  padding: 10px;
  font-family: ${theme.fonts.poppins800};
  z-index: 200;
`;
