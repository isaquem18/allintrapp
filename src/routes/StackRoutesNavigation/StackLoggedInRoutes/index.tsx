import { createStackNavigator } from '@react-navigation/stack';

import CriptoDetails from '@screens/LoggedInGroupPages/ExploreScreen/CriptoDetails';
import Tabs from './TabRoutes';

import * as Styles from './styles';

const { Navigator, Screen } = createStackNavigator<RootStackParamListProps>();

export default function StackRoutesIN() {
  return (
    <Navigator screenOptions={Styles.TabOptions}>
      <Screen name="Tabs" component={Tabs} />
      <Screen
        name="CriptoDetails"
        component={CriptoDetails}
        options={Styles.CriptoDetailsOptions}
      />
    </Navigator>
  );
}
