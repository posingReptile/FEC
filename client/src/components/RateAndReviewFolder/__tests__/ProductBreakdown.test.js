import { render, screen } from '@testing-library/react';
import ProductBreakdown from '../ProductBreakdown.jsx'
import React from 'react'





test('renders the Product Breakdown', () => {
  render(<ProductBreakdown />);

  const ratingsElement = screen.getByTestId('rating-product');
  expect(ratingsElement).toBeTruthy();
});