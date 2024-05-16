import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreenFeedTab from './HomeScreenFeedTab';
import HomeScreenStrategiesTab from './HomeScreenStrategiesTab';
import * as Styles from './styles';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreenFeedTab"
      screenOptions={Styles.ScreenOptions.Navigator}
    >
      <Tab.Screen
        name="HomeScreenFeedTab"
        component={HomeScreenFeedTab}
        options={Styles.ScreenOptions.HomeScreenFeedTab}
      />
      <Tab.Screen
        name="HomeScreenStrategiesTab"
        component={HomeScreenStrategiesTab}
        options={Styles.ScreenOptions.HomeScreenStrategiesTab}
      />
    </Tab.Navigator>
  );
}
