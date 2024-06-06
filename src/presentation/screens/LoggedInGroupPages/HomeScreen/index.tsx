import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { TabsWrapperScreens } from '@components/TabsWrapperScreens';
import HomeScreenFeedTab from './HomeScreenFeedTab';
import HomeScreenStrategiesTab from './HomeScreenStrategiesTab';
import * as Styles from './styles';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <TabsWrapperScreens>
      <Tab.Navigator
        initialRouteName="HomeScreenFeedTab"
        screenOptions={Styles.ScreenOptions.Navigator}
      >
        <Tab.Screen
          name="HomeScreenStrategiesTab"
          component={HomeScreenStrategiesTab}
          options={Styles.ScreenOptions.HomeScreenStrategiesTab}
        />
        <Tab.Screen
          name="HomeScreenFeedTab"
          component={HomeScreenFeedTab}
          options={Styles.ScreenOptions.HomeScreenFeedTab}
        />
      </Tab.Navigator>
    </TabsWrapperScreens>
  );
}
