import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import AppNavigation from './navigation/AppNavigation';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import Mapscreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';


class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    )

  }
}



const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default App;