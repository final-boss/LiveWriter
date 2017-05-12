import 'react-native';
import 'jest';
import React from 'react';
import Landing from './landing';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Landing />
  );
  expect(tree).toBeDefined()
});
