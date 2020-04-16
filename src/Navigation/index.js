
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Home from '../Screens/Home/index';
const AppStack = createStackNavigator({
  Home: { screen: Home },
});
export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    }
  )
)

