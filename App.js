import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppHeader from './components/AppHeader';
import db from './config';
import Screen2 from './screens.js/Screen2';
import HomeScreen from './screens.js/HomeScreen'

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppHeader />
      <AppContainer />
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Screen2: Screen2
});

const AppContainer = createAppContainer(AppNavigator);
