import 'react-native';
import 'jest';
import React           from 'react';
import NewCanvasScreen from './index';
import renderer        from 'react-test-renderer';

describe(NewCanvasScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <NewCanvasScreen />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

});
