import {createStackNavigator} from 'react-navigation-stack'
import {HomeScreen} from '../screens/index'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: 'Home',
        headerMode: "none"
    }
)

export default AppNavigator



