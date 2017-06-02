import React             from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing           from '../components/screens/landing';
import NewCanvas         from '../components/screens/new-canvas';
import Canvas            from '../components/screens/canvas';

export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='landing' component={Landing} />
          <Scene key='newCanvas' component={NewCanvas} />
          <Scene key='canvas' component={Canvas} />
        </Scene>
      </Router>
    )
  }
}
