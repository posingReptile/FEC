import { render, screen } from '@testing-library/react';
import RateAndReview from '../RateAndReview.jsx'
import React from 'react'





test('renders the landing page', () => {
  render(<RateAndReview />);

  const ratingsElement = screen.getByTestId('rating-main');

  expect(ratingsElement).toBeTruthy();
});