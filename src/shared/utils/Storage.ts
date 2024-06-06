import theme from '@styles/theme';
import { Dimensions } from 'react-native';

export function isSmartphone() {
  const { width } = Dimensions.get('screen');

  return !(width > theme.values.maxSmarthPhoneWidth);
}
