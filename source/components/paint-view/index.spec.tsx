import 'react-native';
import 'react-native-svg';
import 'jest';

import React     from 'react';
import PaintView from './index';
import renderer  from 'react-test-renderer';

jest.mock('react-native-svg');

describe(PaintView.name, () => {

  describe('render', () => {

    const component = renderer.create(
      <PaintView />
    );

    it('renders correctly', () => {
      expect(component).toBeDefined()
    });
  });

});
