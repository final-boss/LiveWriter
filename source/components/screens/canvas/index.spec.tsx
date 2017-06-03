import 'react-native';
import 'jest';
import React        from 'react';
import CanvasScreen from './index';
import renderer     from 'react-test-renderer';

describe(CanvasScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <CanvasScreen />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

});
