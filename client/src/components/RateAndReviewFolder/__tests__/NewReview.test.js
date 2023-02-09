import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect} from '@jest/globals'
// import userEvent from '@testing-library/user-event';
import NewReview from '../NewReview.jsx'
// import axios from 'axios';

const charArray = [{rating: '', name: 'Fit', id: 125031}, {rating: '', name: 'Length', id: 125032}, {rating: '', name: 'Comfort', id: 125033}, {rating: '', name: 'Quality', id: 125034}];

const charChoice = {125031: {name: 'Fit', rating: '', checked: 0}, 125032: {name: 'Length', rating: '', checked: 0}, 125033: {name: 'Comfort', rating: '', checked: 0}, 125034: {name: 'Quality', rating: '', checked: 0}}

const charOptions = {
  Size: ['A size too small', 'A 1/2 size too small', 'Perfect', 'A 1/2 size too big','A size too big'],
  Width: ['Too narrow', 'slightly narrow', 'Perfect   ', 'Slightly Wide', 'Too wide'],
  Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect    '],
  Length: ['Runs short', 'Runs slightly short', 'Perfect  ', 'Runs slightly long', 'Runs Long'],
  Fit: ['Runs tight', 'Runs slightly tight', ' Perfect ', 'Runs slighty loose', 'Runs loose']
}

const item = {name: "Camo Onesie"};

const setCharChoice = () => { return 'set'};


describe('Rating Breakdown', () => {


  beforeEach(()=> {
    render(<NewReview charOptions={charOptions}
      charArray={charArray}
      setCharChoice={setCharChoice}
      product_id={'37311'}
      charChoice={charChoice}
      item={item}/>);
  });

  it('Has the product name listed in the modal', ()=> {
    const reviewElement = screen.getByText(`About the ${item.name}`);
    expect(reviewElement).toBeTruthy();
  });

  it('Has placeholder text for username input', ()=> {
    const reviewElement = screen.getByPlaceholderText('Example: jackson11!');
    expect(reviewElement).toBeTruthy();
  });

  // it('User can type words in username input field', ()=> {
  //   const user = userEvent.setup();
  //   const reviewElement = user.keyboard('TacoCat')
  //   screen.getByPlacholderText('Example: jackson11!');
  // })

  it('Has placeholder text for email input', ()=> {
    const reviewElement = screen.getByPlaceholderText('Example: jackson11@email.com');
    expect(reviewElement).toBeTruthy();
  });

  it('Has section to selct overall rating', ()=> {
    const reviewElement = screen.getByText('Overall Rating');
    expect(reviewElement).toBeTruthy();
  });
  it('star rating functional', ()=> {
    const starClick = screen.getByRole("rating-1");
    fireEvent.click(starClick)
  });

  it('Has section to click on recommend product', ()=> {
    const reviewElement = screen.getByText('Do you recommend this product?');
    expect(reviewElement).toBeTruthy();
  });

  it('Has buttons to click on recommend radio', ()=> {
    const reviewElement = screen.getAllByRole('recommend-radio');
    expect(reviewElement).toBeTruthy();
  });
  it('yes radio functional', ()=> {
    const yesClick = screen.getByRole('rec-yes');
    fireEvent.click(yesClick)
  });

  it('Has buttons to click on characteristics rating', ()=> {
    const reviewElement = screen.getAllByRole('characteristics-rating');
    expect(reviewElement).toBeTruthy();
  });

  it('Has functional radio buttons', ()=> {
    const charClick = screen.getByRole('char-Comfortable');
    fireEvent.click(charClick)
  });

  it('Has summary text box for review', ()=> {
    const reviewElement = screen.getByRole('summary');
    expect(reviewElement).toBeTruthy();
  });

  it('Has working textbox for summary', ()=> {
    const keySummary = screen.getByRole('type-summary')
    fireEvent.change(keySummary, {target: {value: 'test for summary'}});
  })

  it('Has body text box for review', ()=> {
    const reviewElement = screen.getByRole('review-body');
    expect(reviewElement).toBeTruthy();
  });

  it('Has working textbox for body', ()=> {
    const keySummary = screen.getByRole('type-body')
    fireEvent.change(keySummary, {target: {value: 'test for body need to make this longer to work?'}});
  })

  it('Has photo input option for review', ()=> {
    const reviewElement = screen.getByRole('handle-image-upload');
    expect(reviewElement).toBeTruthy();
  });

  // it('Has working upload for images', ()=> {
  //   const keySummary = screen.getByRole('handle-image-upload')
  //   fireEvent.change(keySummary, {target: {value: 'test for body need to make this longer to work?'}});
  // })

  it('Has photo preview box for review', ()=> {
    const reviewElement = screen.getByRole('photo-preview');
    expect(reviewElement).toBeTruthy();
  });


  it('render new review page', ()=> {
    const reviewElement = screen.getByRole('add-new-review');
    expect(reviewElement).toBeTruthy();
  });

  it('does not allow submit when forms are not filled out', () => {
    const submitButton = screen.getByRole('submit');
    fireEvent.click(submitButton);
  });


});