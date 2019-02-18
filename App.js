import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Mapscreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';

const MainNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: Mapscreen },
      deck: { screen: DeckScreen }
    })
  }
});



const App = createAppContainer(MainNavigator);

export default App;