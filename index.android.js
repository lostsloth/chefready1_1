/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import fbsdk, { LoginManager }  from 'react-native-fbsdk'

export default class chefready1_1 extends Component {
  
  _fbAuth (){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
        if(result.isCancelled){
          console.log('Login Cancelled');
        }else {
          console.log('Login success: ' + result.grantedPermissions);
        }
    }, function(error) {
          console.log('An error occurred: ' + error);
        })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth}>
          <Text>
            Login with fakebook
          </Text>
          </TouchableOpacity>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('chefready1_1', () => chefready1_1);
