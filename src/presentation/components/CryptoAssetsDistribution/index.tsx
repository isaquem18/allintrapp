import PieChartComponent from '@components/ChartsComponents/PieChartComponent';
import Slider from '@react-native-community/slider';
import throttle from 'lodash.throttle';

import { useState } from 'react';
import * as Styles from './styles';

export function CryptoAssetsDistribution() {
  const [dataValues, setSataValues] = useState([
    { value: 45, label: '' },
    { value: 21, label: '' },
    { value: 15, label: '' },
    { value: 9, label: '' },
    { value: 10, label: '' },
  ]);
  const handleChangePieValue = throttle((value, index) => {
    const newValue = dataValues.slice();
    newValue[index] = value;
    setSataValues(newValue);
  }, 100);

  return (
    <Styles.Container>
      <Styles.PieChartContainer>
        <PieChartComponent
          totalCenterValue="R$ 100.000, 00"
          dataValues={dataValues}
        />
      </Styles.PieChartContainer>
      {['#C0FF8C', '#ffc72d', '#FFD08C', '#8CEAFF', '#FF8C9D'].map(
        (item: string, index: number) => (
          <Slider
            key={item}
            style={{ width: '90%', height: 30 }}
            minimumValue={1}
            maximumValue={100}
            minimumTrackTintColor={item}
            maximumTrackTintColor={item}
            onValueChange={(value) => handleChangePieValue(value, index)}
            value={dataValues[index].value}
          />
        ),
      )}
    </Styles.Container>
  );
}
