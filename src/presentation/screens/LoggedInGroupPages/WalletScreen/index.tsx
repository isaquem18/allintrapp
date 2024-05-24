import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import WalletScreenCryptoassetsTab from './WalletScreenCryptoassetsTab';
import WalletScreenBrokerTab from './WalletScreenBrokerTab';
import * as Styles from './styles';

const Tab = createMaterialTopTabNavigator();

export default function WalletScreen() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreenFeedTab"
      screenOptions={Styles.ScreenOptions.Navigator}
    >
      <Tab.Screen
        name="WalletScreenCryptoassetsTab"
        component={WalletScreenCryptoassetsTab}
        options={Styles.ScreenOptions.WalletScreenCryptoassetsTab}
      />
      <Tab.Screen
        name="WalletScreenBrokerTab"
        component={WalletScreenBrokerTab}
        options={Styles.ScreenOptions.WalletScreenBrokerTab}
      />
    </Tab.Navigator>
  );
}
