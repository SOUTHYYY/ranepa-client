/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options


import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {MapScreen, TimetableScreen} from "./screens";
const App = createBottomTabNavigator(
    {
      Map: { screen: MapScreen },
      Timetable: {screen: TimetableScreen}
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state;
          let IconComponent = Ionicons;
          let iconName;
          if (routeName === 'Map') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Timetable') {
            iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
          }
        },
      }),
      tabBarOptions: {
        activeTintColor: '#E61313',
        inactiveTintColor: '#000',
      },
    }
);
export default createAppContainer(App);
