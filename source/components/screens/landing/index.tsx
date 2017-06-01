import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import React from 'react';

export interface Props {
  navigation : NavigationScreenProp<State, any>
}
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

export default class LandingScreen extends React.Component<Props, State> {

  static navigationOptions : any = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          LiveWriter
        </Text>
        <View>
          <Button title='New Canvas'
                  onPress={() => navigate('NewCanvas')} />
        </View>
      </View>
    );
  }
}
