import { useWindowDimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SafeArea from 'react-native-safe-area-context';

import { TabBarNavigationComponent } from '@components/TabBarNavigationComponent';
import { SideBarNavigationComponent } from '@components/SideBarNavigationComponent';
import { isSmartphone } from '@utils/Storage';
import theme from '@styles/theme';
import { bottomTabRouteList } from './bottomTabRouteList';

import * as Styles from './styles';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const insets = SafeArea.useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <Tab.Navigator
      sceneContainerStyle={
        isSmartphone()
          ? {}
          : {
              marginTop: insets.top + 10,
              width: width - theme.values.sidebarWidth,
              alignSelf: 'flex-end',
              borderLeftWidth: 2,
            }
      }
      tabBar={(props) =>
        isSmartphone() ? (
          <TabBarNavigationComponent {...props} />
        ) : (
          <SideBarNavigationComponent {...props} />
        )
      }
      initialRouteName="Home"
    >
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
