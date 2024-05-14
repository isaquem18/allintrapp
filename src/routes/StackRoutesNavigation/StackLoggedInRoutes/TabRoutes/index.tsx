import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SafeAreaView from 'react-native-safe-area-view';

import { TabBarNavigationComponent } from '@components/TabBarNavigationComponent';
import Home from '@screens/LoggedInGroupPages/Home';
import Tab2 from '@screens/LoggedInGroupPages/Tab2';
import Tab3 from '@screens/LoggedInGroupPages/Tab3';

import * as Styles from './styles';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ bottom: 'always', top: 'always' }}
    >
      <Tab.Navigator
        tabBar={(props) => <TabBarNavigationComponent {...props} />}
        initialRouteName="Home"
      >
        <Tab.Screen name="Home" options={Styles.ScreenOptions.home}>
          {() => <Home />}
        </Tab.Screen>
        <Tab.Screen name="Tab2" options={Styles.ScreenOptions.tab2}>
          {() => <Tab2 />}
        </Tab.Screen>
        <Tab.Screen name="Tab3" options={Styles.ScreenOptions.tab3}>
          {() => <Tab3 />}
        </Tab.Screen>
      </Tab.Navigator>
    </SafeAreaView>
  );
}
