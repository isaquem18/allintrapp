import * as Styles from './styles';

export function FollowingUserFeedPost() {
  return (
    <Styles.ScreenContainer>
      <Styles.HeaderContainer>
        <Styles.UserDataContainer>
          <Styles.Avatar source={require('@assets/images/avatar.png')} />
          <Styles.UserName>Luiz Paulo</Styles.UserName>
        </Styles.UserDataContainer>
        <Styles.PostTime>2min</Styles.PostTime>
      </Styles.HeaderContainer>
      <Styles.DataVisualizationContainer />
      <Styles.DataVisualizationContainer />
      <Styles.CallToActionContainer />
    </Styles.ScreenContainer>
  );
}
