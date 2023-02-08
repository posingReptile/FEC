import React from 'react'
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import {describe, expect} from '@jest/globals'
import userEvent from '@testing-library/user-event';
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
});