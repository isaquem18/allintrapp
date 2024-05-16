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
    blue700: '#2F3C50',
    mainPink: '#D23A86',

    tabBar_background: '#35383E',
    purple: '#420B58',
    darkPurple: '#24132B',
    dark: '#000000',
    pink: '#FC036C',
    green: '#08807B',
    light: '#FFFFFF',
    yellow: '#F1A20B',
    gray5: '#E0E0DE',
    TextFieldGrayBG: '#F2F2F7',
    red: '#cf2f23',
    text1: '#CDCDCD',
  },
  values: {
    touchOpacity: 0.8,
    paddingHorizontal: 16,
    paddingBottom: width / 2,
    paddingTop: 30,
  },
};
