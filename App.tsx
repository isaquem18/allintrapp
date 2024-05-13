import 'react-native-gesture-handler';
import { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function App() {
  const [splashAnimationIsLoading, setSplashAnimationIsLoading] =
    useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
  });

  if ((!fontsLoaded && !fontError) || splashAnimationIsLoading) {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: '#111621' }}>
          <LottieView
            // eslint-disable-next-line global-require
            onLayout={() => {
              setSplashAnimationIsLoading(true);
            }}
            onAnimationFinish={() => {
              setSplashAnimationIsLoading(false);
            }}
            source={require('@assets/lottie/loading-splashcreen.json')}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop={false}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>SplashScreen Demo! 👋</Text>
        </View>
      </NavigationContainer>
    </>
  );
}
