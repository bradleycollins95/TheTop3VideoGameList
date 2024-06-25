import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Game from './components/Game';
import EditTop3 from './components/EditTop3';

const Stack = createStackNavigator();

/**
 * Navigation Component
 * Sets up the navigation stack and provides the routes for the app.
 */
export default function Navigation({ top3, setTop3 }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} top3={top3} />}
        </Stack.Screen>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="EditTop3">
          {(props) => <EditTop3 {...props} top3={top3} setTop3={setTop3} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



