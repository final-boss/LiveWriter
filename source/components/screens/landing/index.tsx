import { Container, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import React    from 'react';

export interface Props { }
export interface State { }
export const styles : any = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:     'center'
  },
  title: {
    fontSize: 64,
    margin: 10,
    textAlign: 'center',
  }
};

export default class LandingScreen extends React.Component<Props, State> {

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.title}>LiveWriter</Text>
          <View>
            <Button onPress={() => Actions['newCanvas']() }>
              <Text>New Canvas</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
