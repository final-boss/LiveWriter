import 'react-native';
import 'jest';
import React        from 'react';
import CanvasScreen from './index';
import renderer     from 'react-test-renderer';

jest.mock('react-native-svg');

describe(CanvasScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <CanvasScreen />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

  describe('.navigationOptions', () => {

    const navigationOptions = CanvasScreen.navigationOptions;

    it('does not have a header', () => {
      expect(navigationOptions.header).toBeNull()
    });
  });

});
