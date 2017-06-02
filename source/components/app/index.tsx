import React             from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing           from '../screens/landing';
import NewCanvas         from '../screens/new-canvas';
import Canvas            from '../screens/canvas';

export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Scene key='root' hideNavBar={true}>
          <Scene key='landing'   component={Landing} />
          <Scene key='newCanvas' component={NewCanvas} />
          <Scene key='canvas'    component={Canvas} />
        </Scene>
      </Router>
    )
  }
}
