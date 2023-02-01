import React from 'react'
import { render } from '@testing-library/react';

import Dropdown from '../Dropdown.jsx';

test('renders the Product Dropdown', () => {
  const {container} = render('<Dropdown />');

  const Dropdown = container.getElementsByClassName('dropdown-input');
  expect(Dropdown).toBeTruthy();
});