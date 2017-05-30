import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class EventDetail extends Component {
    render() {
        const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: picture.large }}
                    featured
                    title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                    caption={'<-- Swipe through photos of the location --> '}
                />
                <List>
                    <ListItem
                        title="bio"
                        rightTitle={'We are non-profit the provides this awesome service for the elderly who are not grumpy...'}
                        hideChevron
                    />
                    <ListItem
                        title="contact"
                        rightTitle={'Johnny Johnstone'}
                        hideChevron
                    />
                    <ListItem
                        title="email"
                        rightTitle={email}
                        hideChevron
                    />
                    <ListItem
                        title="phone"
                        rightTitle={phone}
                        hideChevron
                    />
                    <ListItem
                        title="location"
                        rightTitle={location.city + ', ' + location.state}
                        hideChevron
                    />
                </List>
            </ScrollView>
        );
    }
}

export default EventDetail;
