import HomeScreen from '@screens/LoggedInGroupPages/HomeScreen';
import ExploreScreen from '@screens/LoggedInGroupPages/ExploreScreen';
import WalletScreen from '@screens/LoggedInGroupPages/WalletScreen';
import ProfileScreen from '@screens/LoggedInGroupPages/ProfileScreen';

import * as Styles from './styles';

export const bottomTabRouteList: bottomTabRouteItemProps[] = [
  {
    name: 'HomeScreen',
    label: 'Home',
    component: HomeScreen,
    icon: Styles.HomeTabIcon,
    testID: 'home-screen',
  },
  {
    name: 'ExploreScreen',
    label: 'Explore',
    component: ExploreScreen,
    icon: Styles.SearchTabIcon,
    testID: 'explore-screen',
  },
  {
    name: 'WalletScreen',
    label: 'Wallet',
    component: WalletScreen,
    icon: Styles.WalletTabIcon,
    testID: 'wallet-screen',
  },
  {
    name: 'ProfileScreen',
    label: 'Profile',
    component: ProfileScreen,
    icon: Styles.ProfileTabIcon,
    testID: 'profile-screen',
  },
];
