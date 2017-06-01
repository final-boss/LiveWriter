import { StackNavigator, NavigationContainer } from 'react-navigation';
import LandingScreen   from '../components/screens/landing';
import NewCanvasScreen from '../components/screens/new-canvas';
import CanvasScreen    from '../components/screens/canvas';

console.log(StackNavigator);

export const App : NavigationContainer = StackNavigator({
  Landing   : { screen : LandingScreen },
  NewCanvas : { screen : NewCanvasScreen },
  Canvas    : { screen : CanvasScreen }
});
