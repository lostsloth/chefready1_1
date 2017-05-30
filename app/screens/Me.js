import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: this.props.picture.large }}
          featured
          title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
          caption={'<-- Swipe through up to 3 uploaded photos -->'}
        />

        <Button
          title="Settings"
          buttonStyle={{ marginTop: 20 }}
          onPress={this.handleSettingsPress}
        />

        <List>
          <ListItem
            title="bio"
            rightTitle={this.props.bio}
            hideChevron
          />
          <ListItem
            title="email"
            rightTitle={this.props.email}
            hideChevron
          />
          <ListItem
            title="phone"
            rightTitle={this.props.phone}
            hideChevron
          />
          <ListItem
            title="location"
            rightTitle={this.props.location}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;
