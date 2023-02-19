import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginContainer from '../views/login/LoginContainer';

const Stack = createNativeStackNavigator();

function NoneAuthRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginContainer} />
    </Stack.Navigator>
  );
}

export { NoneAuthRoute };
