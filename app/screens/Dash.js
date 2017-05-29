import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
var s = require('./Styles');

class Dash extends Component {
  render() {
return (
    <View>
        <Text style={s.dash}>Dash</Text>
    </View>
    );
  }
}



export default Dash;
