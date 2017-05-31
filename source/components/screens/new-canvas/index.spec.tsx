import 'react-native';
import 'jest';
import React           from 'react';
import NewCanvasScreen from './index';
import renderer        from 'react-test-renderer';

const navigation : any = {
  navigate: () => { return }
}

describe(NewCanvasScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <NewCanvasScreen navigation={navigation} />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

  describe('.navigationOptions', () => {

    const navigationOptions = NewCanvasScreen.navigationOptions;

    it('has a header', () => {
      expect(navigationOptions.title).toEqual('New Canvas')
    });
  });

});
