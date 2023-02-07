import React from 'react'
import { render, screen } from '@testing-library/react';

import ShoppingDisplay from '../ShoppingDisplay.jsx';

test('Renders the Size Dropdown', () => {
  let size = [];
  render(<ShoppingDisplay sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});

test('Renders the Shopping Display', () => {
  const {container} = render('<ShoppingDisplay />');

  const ShoppingDisplay = container.getElementsByClassName('');
  expect(ShoppingDisplay).toBeTruthy();
});
