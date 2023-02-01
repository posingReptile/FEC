import { render, screen } from '@testing-library/react';
import RatingBreakdown from '../RatingBreakdown.jsx'
import React from 'react'


test('renders the rating breakdown section', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByTestId('rating-breakdown');
  expect(breakdownElement).toBeTruthy();
});


// BD Summary tests
test('renders rating breakdown summary section', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByTestId('rating-bd-sum');
  expect(breakdownElement).toBeTruthy();
});

test('Has placeholder for product\'s average rating', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByText('4.5');
  expect(breakdownElement).toBeTruthy();
});

// test('Has placeholder for product\'s average rating star visual', () => {
//   render(<RatingBreakdown />);

//   const breakdownElement = screen.getByText('stars');
//   expect(breakdownElement).toBeTruthy();
// });


//BD Recommendation tests
test('renders rating breakdown recommendation section', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByTestId('rating-bd-rec');
  expect(breakdownElement).toBeTruthy();
});

test('has placeholder for recommendation', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByText('% of reviewers recommend this product');
  expect(breakdownElement).toBeTruthy();
});

//BD Recommendation Star Links and Bars
test('renders rating breakdown stars section', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByTestId('rating-bd-stars');
  expect(breakdownElement).toBeTruthy();
});

test('has placeholder for 5 stars', () => {
  render(<RatingBreakdown />);

  const breakdownElement = screen.getByText('5 Stars');
  expect(breakdownElement).toBeTruthy();
});

// will need to write test to verify star bars are rending correctly