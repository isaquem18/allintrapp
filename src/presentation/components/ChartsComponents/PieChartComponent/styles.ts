import { Dimensions, processColor } from 'react-native';
import styled from 'styled-components/native';
import { PieChart } from 'react-native-charts-wrapper';

import theme from '@styles/theme';

const { width } = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PieChartLib = styled(PieChart).attrs<PieChartLibProps>(
  ({ totalCenterValue, dataValues }) => ({
    logEnabled: true,
    chartBackgroundColor: processColor('transparent'),
    entryLabelTextSize: 20,
    rotationEnabled: false,
    rotationAngle: 45,
    usePercentValues: true,
    styledCenterText: {
      text: totalCenterValue,
      color: processColor(theme.colors.light),
      size: 18,
      fontFamily: theme.fonts.poppins800,
    },
    centerTextRadiusPercent: 100,
    holeRadius: width * 0.196,
    holeColor: processColor('transparent'),
    transparentCircleRadius: 93,
    transparentCircleColor: processColor('#00000030'),
    maxAngle: 360,
    legend: {
      enabled: false,
    },
    data: {
      dataSets: [
        {
          values: dataValues,
          label: '',
          config: {
            colors: [
              processColor('#C0FF8C'),
              processColor('#ffc72d'),
              processColor('#FFD08C'),
              processColor('#8CEAFF'),
              processColor('#FF8C9D'),
            ],
            valueTextSize: 0.1,

            valueTextColor: processColor('transparent'),
            sliceSpace: 4,
            selectionShift: 1,
          },
        },
      ],
    },
  }),
)`
  flex: 1;
  width: ${width * 0.55}px;
  max-width: 400px;
`;
