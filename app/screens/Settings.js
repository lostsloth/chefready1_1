import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Menus"
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
