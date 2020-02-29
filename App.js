/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options


import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {MapScreen, TimetableScreen} from "./screens";

// const HomeStack = createStackNavigator(
//     {
//       //Defination of Navigaton from home screen
//     },
//     {
//       defaultNavigationOptions: {
//         //Header customization of the perticular Screen
//         headerStyle: {
//           backgroundColor: '#42f44b',
//         },
//         headerTintColor: '#FFFFFF',
//         title: 'Home',
//         //Header title
//       },
//     }
// );
// const SettingsStack = createStackNavigator(
//     {
//       //Defination of Navigaton from setting screen
//       Map: { screen: MapScreen },
//       Timetable: {screen: TimetableScreen}
//     },
//     {
//       defaultNavigationOptions: {
//         //Header customization of the perticular Screen
//         headerStyle: {
//           backgroundColor: '#42f44b',
//         },
//         headerTintColor: '#FFFFFF',
//         title: 'Settings',
//         //Header title
//       },
//     }
// );
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
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: '#42f44b',
        inactiveTintColor: 'gray',
      },
    }
);
export default createAppContainer(App);
