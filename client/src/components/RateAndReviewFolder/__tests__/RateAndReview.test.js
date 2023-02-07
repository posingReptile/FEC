import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import { act } from '"react-dom/test-utils'
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect, test} from '@jest/globals'
import userEvent from '@testing-library/user-event';
import RateAndReview from '../RateAndReview.jsx'
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3000';

// const props = {
//   product_id: "37311",
//   item: {name: "Camo Onesie"},
//   productRating: 3.9,
//   setProductRating: '',
//   totalNumReviews: 126,
//   setTotalNumReviews: '',
// }


const metaData = {
  characteristics: {Comfort: {id: 125033, value: '3.1908045977011494'},
  Fit: {id: 125031, value: '3.0711111111111111'},
  Length: {id: 125032, value: '3.1173913043478261'},
  Quality: {id: 125034, value: '3.2230046948356808'}},
  product_id: "37311",
  ratings: {1: '70', 2: '32', 3: '94', 4: '140', 5: '337'},
  recommended: {false: '116', true: '557'}
}
describe('Main rating and review page', () => {
  render(<RateAndReview />);

  it('should render to the page', () => {
    return waitFor(() => setTimeout(console.log('loaded'), 1000))
      .then(() => {
        // const ratingsElement = screen.getByTestId('rating-main');
        expect(screen.getByTestId('rating-main')).toBeTruthy();
      })
  });
});

it('renders user data', async() => {
    jest.spyOn(screen, "fetch").mockImplementation(() => Promise.resolve({ json: () => Promise.resolve({data: metaData})}));

    await act(async () => {
      render(<RateAndReview />)
    });

    expect(screen.getByTestId('rating-main')).toBeTruthy();
})



