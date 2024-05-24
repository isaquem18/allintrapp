import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { TabBarNavigationComponent } from '@components/TabBarNavigationComponent';
import { bottomTabRouteList } from './bottomTabRouteList';

import * as Styles from './styles';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator tabBar={TabBarNavigationComponent} initialRouteName="Home">
      {bottomTabRouteList.map((item: bottomTabRouteItemProps) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          options={{ ...Styles.ScreenOptions[item.name], testID: item.testID }}
        >
          {() => <item.component />}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
}
