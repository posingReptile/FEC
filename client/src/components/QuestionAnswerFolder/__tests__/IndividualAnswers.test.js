import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals'
import userEvent from '@testing-library/user-event';
import IndividualAnswers from '../IndividualAnswers'

const searchInput = '';
const answer = {
  "id": 5990320,
  "body": "this product is bad for ducks",
  "date": "2023-02-03T00:00:00.000Z",
  "answerer_name": "duckduckgoose",
  "helpfulness": 34,
  "photos": [
    "https://st2.depositphotos.com/1036149/5381/i/450/depositphotos_53811511-stock-photo-duck-with-sunglasses.jpg"
  ]
}

describe('Individual Answer', function () {
  // const user = userEvent.setup();
  // const { getByTestId, getAllByTestId } =

  beforeEach(() => {
    render(<IndividualAnswers searchInput={searchInput} key={answer.id} answer={answer} />);
  })

  test('should render the Answer', () => {
    const answerElement = screen.getByTestId('answerBlock');
    expect(answerElement).toBeTruthy();
  });

  test('Yes should open modal onClick ', () => {
    const yesClick = screen.getByTestId("answerYes");
    fireEvent.click(yesClick);

  });

  test('Should expand photo onClick ', () => {
    const photo = screen.getByTestId("Photo");
    fireEvent.click(photo);
  });

})
