import React from 'react';
import Intro from '../screens/login_screen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<loginscreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
