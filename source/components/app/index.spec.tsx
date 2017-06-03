import 'react-native';
import 'react-native-svg';
import 'jest';
import React    from 'react';
import App      from './index';
import renderer from 'react-test-renderer';

describe(App.name, () => {

  describe('render', () => {

    const component = renderer.create(
      <App />
    );

    it('renders correctly', () => {
      expect(component).toBeDefined()
    });
  });

});
