import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';

class Settings extends Component {
  handleNotificationsPress = () => {
    this.props.navigation.navigate('Notifications');
  };
  handleMenusPress = () => {
    this.props.navigation.navigate('Menus');
  };
  handlePhotosPress = () => {
    this.props.navigation.navigate('Photos');
  };

  render() {
    return (
      <ScrollView>
        <Button
          title="Notifications"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleNotificationsPress}
        />
        <Button
          title="Menus"
          buttonStyle={{ marginTop: 10 }}
          onPress={this.handleMenusPress}
        />
        <Button
          title="Photos"
          buttonStyle={{ marginTop: 10 }}
          onPress={this.handlePhotosPress}
        />
      </ScrollView>
    );
  }
}

export default Settings;
