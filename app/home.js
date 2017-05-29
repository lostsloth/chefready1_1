import React, { Component } from 'react';
import { View,Text,StyleSheet,TouchableHighlight, } from 'react-native';

class Home extends Component {

render(){
    return(
        <View style={styles.container}><Text>Home View</Text></View>
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

export default Home;
