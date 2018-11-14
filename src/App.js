// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Routing from './Routing';

type Props = {};

class App extends Component<Props> {
  render() {
    return <Routing />;
  }
}

export default App;