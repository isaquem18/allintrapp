import LottieView from 'lottie-react-native';

import * as Styles from './styles';

interface Props {
  setSplashAnimationIsLoading: (arg: boolean) => void;
}

export default function SplashScreenLogoAnimation({
  setSplashAnimationIsLoading,
}: Props) {
  return (
    <Styles.ScreenContainer>
      <LottieView
        // eslint-disable-next-line global-require
        onLayout={() => {
          setSplashAnimationIsLoading(true);
        }}
        onAnimationFinish={() => {
          setSplashAnimationIsLoading(false);
        }}
        source={require('@assets/lottie/loading-splashcreen.json')}
        style={Styles.LottieViewStyles}
        autoPlay
        loop={false}
      />
    </Styles.ScreenContainer>
  );
}
