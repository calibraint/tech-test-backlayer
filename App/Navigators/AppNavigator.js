import { createAppContainer, createStackNavigator } from 'react-navigation'

import LoginScreen from '../Containers/LoginScreen/LoginScreen'
import DashboardScreen from '../Containers/DashboardScreen/DashboardScreen';


const StackNavigator = createStackNavigator({
    // Create the application routes here (the key is the route name, the value is the target screen)
    MainScreen: LoginScreen,
    DashboardScreen: DashboardScreen
  },
  {
    // By default the application will show the Main screen
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
