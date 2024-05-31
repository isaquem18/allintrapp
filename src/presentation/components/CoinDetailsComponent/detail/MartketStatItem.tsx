import { Text, View } from 'react-native';

export type MarketStatItemProps = React.ComponentProps<any> & {
  name: string;
  value: number;
};

export default function MartketStatItem({
  name,
  value,
  ...restProps
}: MarketStatItemProps) {
  return (
    <View
      {...restProps}
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="$white"
    >
      <Text>{name}</Text>
      <Text>{value}</Text>
    </View>
  );
}
