import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
} from 'react-native';
import { FBLoginManager } from 'react-native-facebook-login';
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  ShareDialog,
  AccessToken,
} = FBSDK;
import FacebookLoginScreen from '../login';

class Dash extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Decide How this page should work. Once user is authenticated auto-redirection happens to Dashboard Stack.</Text>

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
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});

export default Dash;
