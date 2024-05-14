import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '@routes/types';

import Tabs from './TabRoutes';

import * as Styles from './styles';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export default function StackRoutesIN() {
  return (
    <Navigator screenOptions={Styles.TabOptions}>
      <Screen name="Tabs" component={Tabs} />
    </Navigator>
  );
}
