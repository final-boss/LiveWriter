import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Switch
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import React                    from 'react';

export interface Props {
  navigation : NavigationScreenProp<State, any>
}
export interface State {
  name   : string
  isOpen : boolean
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  nameInput: {
    height: 64,
    borderWidth: 0.5,
    borderColor: '#333',
    backgroundColor: '#FFF',
    fontSize: 24,
    padding: 10,
    margin: 10
  }
});

export default class NewCanvasScreen extends React.Component<Props, State> {

  static navigationOptions : any = {
    title: 'New Canvas'
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name:   null,
      isOpen: true
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput autoCapitalize='none'
                   style={styles.nameInput}
                   value={this.state.name} />
        <Switch style={styles.isOpenInput} />
        <Button title='Create'
                onPress={() => navigate('Canvas') } />
      </View>
    );
  }
}
