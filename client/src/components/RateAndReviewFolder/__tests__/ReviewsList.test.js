import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect} from '@jest/globals'
// import userEvent from '@testing-library/user-event';
import ReviewsList from '../ReviewsList.jsx'
// import axios from 'axios';

const product_id = "37311";
const item =  {name: "Camo Onesie"};

const charChoice = {
  125031: {name: 'Fit', rating: '', checked: 0},
  125032: {name: 'Length', rating: '', checked: 0},
  125033: {name: 'Comfort', rating: '', checked: 0},
  125034: {name: 'Quality', rating: '', checked: 0}
}

const charOptions = {
  Size: ['A size too small', 'A 1/2 size too small', 'Perfect', 'A 1/2 size too big','A size too big'],
  Width: ['Too narrow', 'slightly narrow', 'Perfect   ', 'Slightly Wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect    '],
  Length: ['Runs short', 'Runs slightly short', 'Perfect  ', 'Runs slightly long', 'Runs Long'],
  Fit: ['Runs tight', 'Runs slightly tight', ' Perfect ', 'Runs slighty loose', 'Runs loose']
}

const charArray = [{rating: '', name: 'Fit', id: 125031}, {rating: '', name: 'Length', id: 125032}, {rating: '', name: 'Comfort', id: 125033}, {rating: '', name: 'Quality', id: 125034}];

const reviewsShown = [{ body: "This is annoying that is has to be 50 characters long.",
date: "2023-02-03T00:00:00.000Z",
helpfulness: 16,
photos: [
  {id: 2457213, url: 'https://64.media.tumblr.com/332f0b22d4eac658a2e87c73fd7db145/tumblr_inline_oujv3l9kfD1swtfnl_500.png'}],
rating: 3,
recommend: true,
response: null,
review_id: 1278551,
reviewer_name: "test",
summary: "Meow"}, { body: "do it for aunt dont do it for clout these yo rules baby this yo house.",
date: "2023-02-07T00:00:00.000Z",
helpfulness: 7,
photos: [],
rating: 5,
recommend: true,
response: null,
review_id: 1278841,
reviewer_name: "rich nephew",
summary: "rich nephew"}];

const dummyFunc = () => console.log('hello');

describe('Reviews List', () => {


  beforeEach(()=> {
    render(<ReviewsList setSortBy={dummyFunc}
      totalNumReviews={153}
      reviewsShown={reviewsShown}
      showMoreReviews={dummyFunc}
      markHelpful={dummyFunc}
      reportReview={dummyFunc}
      charArray={charArray}
      charChoice={charChoice}
      setCharChoice={dummyFunc}
      product_id={product_id}
      charOptions={charOptions}
      item={item}/>);
  });

  it('Yes should open modal onClick ', () => {
    const modalClick = screen.getByRole("open-modal");
    fireEvent.click(modalClick);

  });

  it('renders two review tile bodies', () => {
    const reviewTile = screen.getAllByTestId("review-tile-body");
    expect(reviewTile.length).toEqual(2);
  });



})