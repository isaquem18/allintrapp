import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '@screens/LoggedOutGroupPages/SignIn';

const Stack = createStackNavigator<RootStackParamListProps>();

export default function StackRoutesOUT() {
  LogBox.ignoreLogs(['Sending']);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
