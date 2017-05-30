import React, { Component } from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { events } from '../config/data';

class EventList extends Component {
    onLearnMore = (event) => {
        this.props.navigation.navigate('Details', { ...event });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }} scrollEnabled={true}>
                    <List style={{ flex: 1 }}>
                        {events.map((event) => (
                            <ListItem
                                key={event.login.username}
                                roundAvatar
                                avatar={{ uri: event.picture.thumbnail }}
                                title={`${event.name.first} ${event.name.last.toUpperCase()}`}
                                subtitle={event.email}
                                onPress={() => this.onLearnMore(event)}
                            />
                        ))}
                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default EventList;
