import { StackNavigator, NavigationContainer } from 'react-navigation';
import LandingScreen from './components/screens/landing';
import CanvasScreen  from './components/screens/canvas';

export const App : NavigationContainer = StackNavigator({
  Landing : { screen : LandingScreen },
  Canvas  : { screen : CanvasScreen }
});
