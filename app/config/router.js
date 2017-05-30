import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Dash from '../screens/Dash';
import Settings from '../screens/Settings';
import EventDetail from '../screens/EventDetail';
import Me from '../screens/Me';
import EventList from '../screens/EventList';
import Notifications from '../screens/Notifications';
import Menus from '../screens/Menus';
import Photos from '../screens/Photos';

export const EventListStack = StackNavigator({
  EventList: {
    screen: EventList,
    navigationOptions: {
      title: 'Event List',
    },
  },
  Details: {
    screen: EventDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
    }),
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: ({ navigation }) => ({
      title: 'Notifications',
    }),
  },
  Menus: {
    screen: Menus,
    navigationOptions: ({ navigation }) => ({
      title: 'Menus',
    }),
  },
  Photos: {
    screen: Photos,
    navigationOptions: ({ navigation }) => ({
      title: 'Photos',
    }),
  },
});


export const DashboardStack = StackNavigator({
  Dashboard: {
    screen: Dash,
    navigationOptions: {
      title: 'Dashboard',
    },
  },
});

/* These are the three icons along the bottom of the main app pages */
export const Tabs = TabNavigator({
  Dash: {
    screen: DashboardStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  EventList: {
    screen: EventListStack,
    navigationOptions: {
      tabBarLabel: 'Event List',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'My Details',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
    mode: 'modal',
    headerMode: 'none',
  });


