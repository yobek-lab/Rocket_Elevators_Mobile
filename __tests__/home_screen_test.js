import React from 'react';
import Intro from '../screens/home_screen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<homescreen />).toJSON();
  expect(tree).toMatchSnapshot();
});