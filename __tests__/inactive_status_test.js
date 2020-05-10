import React from 'react';
import Intro from '../screens/inactive_status';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<inactivestatusscreen />).toJSON();
  expect(tree).toMatchSnapshot();
});