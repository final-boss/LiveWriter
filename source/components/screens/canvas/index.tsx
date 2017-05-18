import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export interface Props { }
export interface State { }

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 64,
    textAlign: 'center',
    margin: 10,
    color: '#333'
  }
});

export default class CanvasScreen extends React.Component<Props, State> {

  static navigationOptions : any = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Canvas
        </Text>
      </View>
    );
  }
}
