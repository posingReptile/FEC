import React from 'react'
import { render, screen } from '@testing-library/react';

import ShoppingDisplay from '../ShoppingDisplay.jsx';

test('Renders the Shopping Display', () => {
  render(<ShoppingDisplay cart={[]}/>);
  const sD = screen.getByTestId('testShopD');
  expect(sD).toBeTruthy();
});

