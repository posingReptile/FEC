import React from 'react'
import { render, screen } from '@testing-library/react';

import ProductInformation from '../ProductInformation.jsx';

test('Renders the Size Dropdown', () => {
  let size = [];
  render(<ProductInformation sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});

test('Renders the Product Information', () => {
  const {container} = render('<ProductInformation />');

  const ProductInformation = container.getElementsByClassName('');
  expect(ProductInformation).toBeTruthy();
});