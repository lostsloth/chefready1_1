import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableHighlight, } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import { Root, Tabs } from './config/router';
import { users } from './config/data';
import Login from './login';


class App extends Component {

  render() {
    return (
      <Login />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});

export default App;