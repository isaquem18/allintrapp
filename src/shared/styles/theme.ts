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
  },
  values: {
    touchOpacity: 0.8,
    paddingHorizontal: 16,
    paddingBottom: width / 2,
    paddingTop: 30,
  },
};
