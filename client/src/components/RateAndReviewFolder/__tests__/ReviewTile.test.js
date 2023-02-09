import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect} from '@jest/globals'
// import userEvent from '@testing-library/user-event';
import ReviewTile from '../ReviewTile.jsx'
// import axios from 'axios';

const review = { body: "This is annoying that is has to be 50 characters long.",
date: "2023-02-03T00:00:00.000Z",
helpfulness: 16,
photos: [
  {id: 2457213, url: 'https://64.media.tumblr.com/332f0b22d4eac658a2e87c73fd7db145/tumblr_inline_oujv3l9kfD1swtfnl_500.png'}],
rating: 3,
recommend: true,
response: null,
review_id: 1278551,
reviewer_name: "test",
summary: "Meow"};

const markHelpful = () => { return 'helpful'};
const reportReview = () => { return 'helpful'};

describe('Rating Breakdown', () => {


  beforeEach(()=> {
    render(<ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview} />);
  });

  it('renders a review tile', ()=> {
    const reviewTile = screen.getByRole('review-tile')
    expect(reviewTile).toBeTruthy();
  });

  it('yes helpful button functional', ()=> {
    const helpfulClick = screen.getByRole('click-helpful');
    fireEvent.click(helpfulClick)
  });

  it('report button functional', ()=> {
    const reportClick = screen.getByRole('click-report');
    fireEvent.click(reportClick)
  });

  it('renders review tile body too', () => {
    const reviewTile = screen.getByTestId("review-tile-body");
    expect(reviewTile).toBeTruthy();
  });
  // it('renders two review tile bodies', () => {
  //   const reviewTile = screen.getAllByTestId("review-tile-body");
  //   expect(reviewTile.length).toEqual(2);
  // });

});