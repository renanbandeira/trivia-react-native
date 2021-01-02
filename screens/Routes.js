import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Game from './Game';
import Ranking from './Ranking';

const Stack = createStackNavigator();

export default function Routes() {
  return <NavigationContainer
  >
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Ranking"
          component={Ranking}
        />
      </Stack.Navigator>
  </NavigationContainer>;
}
