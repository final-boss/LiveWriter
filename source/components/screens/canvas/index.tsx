import { StyleSheet, View } from 'react-native';
import Canvas               from '../../paint-view';
import React                from 'react';

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  }
});

export default class CanvasScreen extends React.Component<Props, State> {

  static navigationOptions : any = {
    header: null
  }

  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <View style={styles.container}>
        <Canvas />
      </View>
    );
  }
}
