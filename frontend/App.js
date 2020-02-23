import React from 'react'

import {createAppContainer} from 'react-navigation';
import AppNavigator from './navigation/index'

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
    render() {
        return <AppContainer/>
    }
}
