import Home from '@screens/LoggedInGroupPages/Home';
import Tab2 from '@screens/LoggedInGroupPages/Tab2';
import Tab3 from '@screens/LoggedInGroupPages/Tab3';
import Tab4 from '@screens/LoggedInGroupPages/Tab4';

import * as Styles from './styles';

export const bottomTabRouteList: bottomTabRouteItemProps[] = [
  { name: 'home', label: 'Home', component: Home, icon: Styles.HomeTabIcon },
  {
    name: 'tab2',
    label: 'Explore',
    component: Tab2,
    icon: Styles.SearchTabIcon,
  },
  {
    name: 'tab3',
    label: 'Wallet',
    component: Tab3,
    icon: Styles.WalletTabIcon,
  },
  {
    name: 'tab4',
    label: 'Profile',
    component: Tab4,
    icon: Styles.ProfileTabIcon,
  },
];
