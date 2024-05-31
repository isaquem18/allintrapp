import { View } from 'react-native';
import theme from '@styles/theme';

export default function Separator() {
  return (
    <View style={{ borderTopWidth: 1, borderTopColor: theme.colors.gray200 }} />
  );
}
