import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect, test} from '@jest/globals'
import userEvent from '@testing-library/user-event';
import RateAndReview from '../RateAndReview.jsx'
import App from '../../App.jsx';
import axios from 'axios';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react'

axios.defaults.baseURL = 'http://localhost:3000';

// const props = {
//   product_id: "37311",
//   item: {name: "Camo Onesie"},
//   productRating: 3.9,
//   setProductRating: '',
//   totalNumReviews: 126,
//   setTotalNumReviews: '',
// }



test('renders the landing page', () => {
  render(<App />);

  const ratingsElement = screen.getByTestId('rating-main');
  expect(ratingsElement).toBeTruthy();


});

describe('Product Breakdown', () => {
  render(<App />)

  it('should render the Product Breakdown', () => {
    const ratingsElement = screen.getByTestId('rating-product');
    expect(ratingsElement).toBeTruthy();
  })
  // test('renders the Product Breakdown', () => {

  // });
})