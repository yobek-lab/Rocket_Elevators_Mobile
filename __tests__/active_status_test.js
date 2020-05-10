import React from 'react';
import Intro from '../screens/active_status';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<activesatusscreen />).toJSON();
  expect(tree).toMatchSnapshot();
});