import { LogBox } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '@screens/LoggedOutGroupPages/SignIn';
import { RootStackParamList } from '@routes/types';

const Stack = createStackNavigator<RootStackParamList>();

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
