import {
  Container, Header, Body, Text,
  Left, Right, Button, Icon
} from 'native-base';
import Canvas from '../../paint-view';
import React  from 'react';

export interface Props { }
export interface State { }

export default class CanvasScreen extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context);
    this.state = { };
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Text>Canvas</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Canvas />
      </Container>
    );
  }
}
