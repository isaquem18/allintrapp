import * as Styles from './styles';

function PieChartComponent({
  totalCenterValue = '',
  dataValues = [],
}: PieChartLibProps) {
  return (
    <Styles.Container>
      <Styles.PieChartLib
        totalCenterValue={totalCenterValue}
        dataValues={dataValues}
      />
    </Styles.Container>
  );
}

export default PieChartComponent;
