import 'react-native-gesture-handler';

import { useState } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { QueryClientProvider } from '@tanstack/react-query';

import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { SplashScreenLogoAnimation } from '@components/SplashScreenLogoAnimation';
import AuthRoutes from '@routes/index';
import theme from '@styles/theme';
import { NavigationContainerTheme } from '@styles/NavigationContainerStyle';
import { GlobalContextProvider } from 'src/shared/context';
import queryClient from '@data/react-query-client';

export default function App() {
  LogBox.ignoreLogs(['Sending']);
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
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <SplashScreenLogoAnimation
          setSplashAnimationIsLoading={setSplashAnimationIsLoading}
        />
      </>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <NavigationContainer theme={NavigationContainerTheme}>
              <AuthRoutes />
            </NavigationContainer>
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalContextProvider>
    </>
  );
}
