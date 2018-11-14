// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import * as Pages from './scenes';

export const RootNavigator = createStackNavigator(
  {
    Main: {
      screen: Pages.Main
    },
    Dashboard: {
      screen: Pages.Dashboard
    },
  },
  {
    initialRouteName: 'Main',
  }
);

class Routing extends Component<Props, State> {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigator />
      </View>
      );
  }
}

export default Routing;