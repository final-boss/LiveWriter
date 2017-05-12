import { StackNavigator, NavigationContainer } from 'react-navigation';
import LandingScreen                           from './components/screens/landing';

export const App : NavigationContainer = StackNavigator({
  Landing : { screen : LandingScreen }
});
