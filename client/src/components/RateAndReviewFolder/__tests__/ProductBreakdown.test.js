import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect, test} from '@jest/globals'
// import userEvent from '@testing-library/user-event';
import ProductBreakdown from '../ProductBreakdown.jsx'
// import axios from 'axios';


const productChar = [{name: 'Fit', percent: 61.422222222222224, value: '3.0711111111111111', id: 125031},
{name: 'Length', percent: 62.34782608695652, value: '3.1173913043478261', id: 125032}, {name: 'Comfort', percent: 63.816091954022994, value: '3.1908045977011494', id: 125033}, {name: 'Quality', percent: 64.46009389671362, value: '3.2230046948356808', id: 125034}]

const charWords = {
  'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
  'Fit': ['Runs tight', ' Perfect ', 'Runs loose'],
  'Length': ['Runs short', 'Perfect  ', 'Runs Long'],
  'Quality': ['Poor', 'What I expected', 'Perfect    ']
}

describe('Product Breakdown', function () {

  beforeEach(() => {
    render(<ProductBreakdown productChar={productChar} charWords={charWords}/>);
  })

  test('should render the Product Breakdown', () => {
    const ratingsElement = screen.getByTestId('rating-product');
    expect(ratingsElement).toBeTruthy();
  });

  test('should render correct number of product bars', () => {
    const ratingBarsArr = screen.getAllByTestId('product-bars');
    expect(ratingBarsArr.length).toEqual(4)
  });


  test('Should show three descriptor words per product bar', () => {
    const productWords = screen.getAllByTestId('product-words');
    expect(productWords.length).toEqual(12);
  });

})



