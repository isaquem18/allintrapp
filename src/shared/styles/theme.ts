import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default {
  fonts: {
    poppins200: 'poppins200',
    poppins400: 'poppins400',
    poppins600: 'poppins600',
    poppins800: 'poppins800',
    poppins900: 'poppins900',
  },
  colors: {
    mainBackgroundColor: '#111621',
    secondaryBackgroundColor: '#1E2B44',
    mainPink: '#D23A86',
    light: '#FFFFFF',
    dark: '#000000',
    gray200: '#dedede',
    gray500: '#b0b0b0',
    lightBlue: '#40dfef',
    lightGreen: '#b4ff9f',
    success: '#4fbb35',
  },
  values: {
    touchOpacity: 0.8,
    paddingHorizontal: 16,
    paddingBottom: width / 2,
    paddingTop: 30,
  },

  skeletonStyles: {
    backgroundColor: '#b4b4b4',
    foregroundColor: '#535353',
    opacity: 0.5,
    speed: 1.5,
  },
};
