import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

const AppNavigator = createBottomTabNavigator({
  welcome: { screen: WelcomeScreen, navigationOptions: { tabBarVisible: false }},
  auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: false } },
  main: {
    navigationOptions: { tabBarVisible: false },
    screen: createBottomTabNavigator({
      map: { screen: MapScreen, navigationOptions: { tabBarVisible: true } },
      deck: { screen: DeckScreen, navigationOptions: { tabBarVisible: true } },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen, navigationOptions: { tabBarVisible: true } },
          settings: { screen: SettingsScreen, navigationOptions: { tabBarVisible: true } }
        })
      }
    })
  }

  
}, {
    navigationOptions: { 
        tabBarVisible: false
    },
    lazy: true
});



const AppContainer = createAppContainer(AppNavigator);


class AppNavigation extends Component {
  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

export default connect(null, actions)(AppNavigation);