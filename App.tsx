import 'react-native-gesture-handler';

import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { SplashScreenLogoAnimation } from 'src/shared/components/SplashScreenLogoAnimation';
import AuthRoutes from '@routes/index';
import theme from '@styles/theme';
import { GlobalContextProvider } from '@contexts/index';
import { NavigationContainerTheme } from '@styles/NavigationContainerStyle';

export default function App() {
  const [splashAnimationIsLoading, setSplashAnimationIsLoading] =
    useState(false);
  const [fontsLoaded, fontError] = useFonts({
    poppins200: Poppins_200ExtraLight,
    poppins400: Poppins_400Regular,
    poppins600: Poppins_600SemiBold,
    poppins800: Poppins_800ExtraBold,
    poppins900: Poppins_900Black,
  });

  if ((!fontsLoaded && !fontError) || splashAnimationIsLoading) {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SplashScreenLogoAnimation
          setSplashAnimationIsLoading={setSplashAnimationIsLoading}
        />
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <GlobalContextProvider>
        <ThemeProvider theme={theme}>
          <NavigationContainer theme={NavigationContainerTheme}>
            <AuthRoutes />
          </NavigationContainer>
        </ThemeProvider>
      </GlobalContextProvider>
    </>
  );
}
