import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Dash from '../screens/Dash';
import Settings from '../screens/Settings';
import EventDetail from '../screens/EventDetail';
import Me from '../screens/Me';
import EventList from '../screens/EventList';

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

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
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
    screen: Me,
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
  Settings: {
    screen: SettingsStack,
  },
}, {
    mode: 'modal',
    headerMode: 'none',
  });


