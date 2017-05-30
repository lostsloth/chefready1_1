import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { List, ListItem, Tile } from 'react-native-elements'

class Dash extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>I. Notifications</Text>
        <Text>(most recent top 5 events)</Text>
        <Text></Text>
        <Text>II. Requests from event coordinator</Text>
        <Text>(accept request and event disappears from this list)</Text>
        <Text>(event will appear at the top of the event list)</Text>
        <Text></Text>
        <Text>III. Star Ratings</Text>
        <Text>(average star rating displayed in 5 stars)</Text>
        <Text>(recommendations from completed events)</Text>
        <Text></Text>
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
