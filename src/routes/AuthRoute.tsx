import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AlbumsContainer from '../views/albums/AlbumsContainer';

const Stack = createNativeStackNavigator();

function AuthRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={AlbumsContainer} />
    </Stack.Navigator>
  );
}

export { AuthRoute };
