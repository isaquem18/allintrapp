import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

interface ScreenOptionsProps {
  home: BottomTabNavigationOptions;
  tab2: BottomTabNavigationOptions;
  tab3: BottomTabNavigationOptions;
}

export const ScreenOptions: ScreenOptionsProps = {
  home: {
    headerLeft() {
      return <Text>AAAA</Text>;
    },
    headerRight() {
      return <Text>BBBB</Text>;
    },
    tabBarItemStyle: {
      backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  tab2: {},
  tab3: {},
};
