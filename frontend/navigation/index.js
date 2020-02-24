import {createStackNavigator} from 'react-navigation-stack'
import {
    HomeScreen,
    TimetableScreen
} from '../screens/index'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Timetable: TimetableScreen
    },
    {
        initialRouteName: 'Timetable',
        headerMode: "none"
    }
)

export default AppNavigator

