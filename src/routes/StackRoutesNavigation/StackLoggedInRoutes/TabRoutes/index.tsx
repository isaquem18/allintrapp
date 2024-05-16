import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabBarNavigationComponent } from '@components/TabBarNavigationComponent';

import * as Styles from './styles';
import { bottomTabRouteList } from './bottomTabRouteList';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={{ top: 'off' }} mode="margin">
      <Tab.Navigator tabBar={TabBarNavigationComponent} initialRouteName="Home">
        {bottomTabRouteList.map((item: bottomTabRouteItemProps) => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            options={{ ...Styles.ScreenOptions[item.name] }}
          >
            {() => <item.component />}
          </Tab.Screen>
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
}
