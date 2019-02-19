import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/WelcomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";

const AppNavigator = createBottomTabNavigator({
  home: { screen: HomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: createBottomTabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: createStackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen }
        })
      }
    })
  }
});

const AppContainer = createAppContainer(AppNavigator);


class AppNavigation extends Component {
  render() {
    return <AppContainer screenProps={this.props} />;
  }
}

export default connect(null, actions)(AppNavigation);