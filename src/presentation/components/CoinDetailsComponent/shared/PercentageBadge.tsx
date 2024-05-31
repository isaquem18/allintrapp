import theme from '@styles/theme';
import { Text, View } from 'react-native';

export type PercentageBadgeProps = {
  percentage: number;
};

export default function PercentageBadge({ percentage }: PercentageBadgeProps) {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      {/* <Icon as={resolveIcon()} h="$2" w="$2" color={resolveColor()} /> */}
      <Text style={{ color: theme.colors.light }}>
        {percentage.toFixed(2)} %
      </Text>
    </View>
  );
}
