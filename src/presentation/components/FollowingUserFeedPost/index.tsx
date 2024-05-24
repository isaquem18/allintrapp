import { LineAreaChartComponent } from '@components/ChartsComponents/LineAreaChartComponent';

import * as Styles from './styles';

interface Props {
  item: number;
}

export function FollowingUserFeedPost({ item }: Props) {
  return (
    <Styles.ScreenContainer>
      <Styles.HeaderContainer>
        <Styles.UserDataContainer>
          <Styles.Avatar source={require('@assets/images/avatar.png')} />
          <Styles.UserName>Luiz Paulo</Styles.UserName>
        </Styles.UserDataContainer>
        <Styles.PostTime>2min</Styles.PostTime>
      </Styles.HeaderContainer>
      <Styles.UserPost>Este é um grafico em tempo real</Styles.UserPost>
      <Styles.DataVisualizationContainer />
      {item === 1 && <LineAreaChartComponent />}
      <Styles.DataVisualizationContainer />
      <Styles.CallToActionContainer />
    </Styles.ScreenContainer>
  );
}
