
import React from 'react';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {NavigationContainer} from '@react-navigation/native'
import reducers from './redux'

import {MapScreen, TimetableScreen} from "./screens";
import thunk from "redux-thunk";

const Tab = createBottomTabNavigator();

const store = createStore(reducers, applyMiddleware(thunk))

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Map"
                    tabBarOptions={{
                        activeTintColor: '#E61313',
                        selectedIconColor: '#E61313'
                    }}
                >
                    <Tab.Screen
                        name="Map"
                        component={MapScreen}
                        options={{
                            tabBarLabel: 'Карта',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="map" color={color} size={size}/>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Timetable"
                        component={TimetableScreen}
                        options={{
                            tabBarLabel: 'Расписание',
                            tabBarIcon: ({color, size}) => (
                                <Icon name="calendar" color={color} size={size}/>
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
