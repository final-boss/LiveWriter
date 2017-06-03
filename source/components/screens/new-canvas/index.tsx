import {
  Container, Button, Text, Form, Content,
  Label, CheckBox, Header, Body, Item,
  Input, Title, Right, Left, Icon
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import React from 'react';

export interface Props { }
export interface State {
  name   : string
  isOpen : boolean
}

const styles : any = {
  content: {
    margin: 10
  },
  button: {
    marginTop: 10
  },
  checkbox: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default class NewCanvasScreen extends React.Component<Props, State> {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name:   null,
      isOpen: true
    };
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
            <Title>New Canvas</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content style={styles.content}>
          <Form>
            <Item inlineLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>Open?</Label>
              <CheckBox checked={true} style={styles.checkbox} />
            </Item>
            <Button block
                    onPress={() => Actions['canvas']() }
                    style={styles.button}>
              <Text>Create</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
