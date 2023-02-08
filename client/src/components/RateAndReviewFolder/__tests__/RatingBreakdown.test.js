import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect, test} from '@jest/globals'
// import userEvent from '@testing-library/user-event';
import RatingBreakdown from '../RatingBreakdown.jsx'
// import axios from 'axios';

const productRatings = {
  1: 11.1,
  2: 4.6,
  3: 15.0,
  4: 20.2,
  5: 49.1
}

const filter = [];
const setFilter = () => console.log('clicked')


describe('Rating Breakdown', () => {
  beforeEach(()=> {
    render(<RatingBreakdown productRatings={productRatings} productRating={3.9} recommendPercentage={82} filter={filter} setFilter={setFilter}/>);
  })

  test('renders the rating breakdown section', () => {
    const breakdownElement = screen.getByTestId('rating-breakdown');
    expect(breakdownElement).toBeTruthy();
  });

  test('renders rating breakdown summary section', () => {
    const breakdownElement = screen.getByTestId('rating-bd-sum');
    expect(breakdownElement).toBeTruthy();
  });

  test('Has product\'s correct average rating', () => {
    const breakdownElement = screen.getByText('3.9');
    expect(breakdownElement).toBeTruthy();
  });

  test('Has product\'s average rating star visual', () => {
      const breakdownElement = screen.getByTestId('rating-star-visual');
      expect(breakdownElement).toBeTruthy();
    });


    //BD Recommendation tests
    test('renders rating breakdown recommendation section', () => {
      const breakdownElement = screen.getByTestId('rating-bd-rec');
      expect(breakdownElement).toBeTruthy();
    });

    test('has correct percentage for recommendation', () => {
      const breakdownElement = screen.getByText('82% of reviewers recommend this product');
      expect(breakdownElement).toBeTruthy();
    });

    test('renders rating breakdown stars section', () => {
      const breakdownElement = screen.getByTestId('rating-bd-stars');
      expect(breakdownElement).toBeTruthy();
    });

    test('Renders five stars', () => {
      const breakdownElement = screen.getAllByTestId('star-filter');
      expect(breakdownElement.length).toEqual(5);
    });

    test('Star rating bars have labels', ()=> {
      const breakdownElement = screen.getByText('3 stars');
      expect(breakdownElement).toBeTruthy();
    });

    test('Star rating bars are clickable', ()=> {
      const starClick = screen.getByRole('5');
      fireEvent.click(starClick);
    });

    // will need to write test to verify star bars are rending correctly
  });