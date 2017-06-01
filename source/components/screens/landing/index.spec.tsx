import 'react-native';
import 'jest';
import React         from 'react';
import LandingScreen from './index';
import renderer      from 'react-test-renderer';

const navigation : any = {
  navigate: () => { return }
}

describe(LandingScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <LandingScreen navigation={navigation} />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

  describe('.navigationOptions', () => {

    const navigationOptions = LandingScreen.navigationOptions;

    it('does not have a header', () => {
      expect(navigationOptions.header).toBeNull()
    });
  });

});
