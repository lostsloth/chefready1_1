import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import LoginScreen from './login';
import HomeScreen from './home';

class App extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'LoginScreen', name: 'Index' }}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'LoginScreen') {
      return (
        <LoginScreen
          navigator={navigator} />
      );
    }
    if (routeId === 'Homepage') {
      return (
        <HomeScreen
          navigator={navigator} />
      );
    }
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