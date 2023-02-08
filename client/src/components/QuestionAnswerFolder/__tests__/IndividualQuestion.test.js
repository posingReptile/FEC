import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals'
import userEvent from '@testing-library/user-event';
import IndividualQuestion from '../IndividualQuestion'


const itemName = 'testing';
const index = 0;
const searchInput = '';
const question = {
  "question_id": 644533,
  "question_body": "Here is a question, what time is it?",
  "question_date": "2022-12-15T00:00:00.000Z",
  "asker_name": "Edgar",
  "question_helpfulness": 48,
  "reported": false,
  "answers": {
    5990320: {
      "id": 5990320,
      "body": "this product is bad for ducks",
      "date": "2023-02-03T00:00:00.000Z",
      "answerer_name": "duckduckgoose",
      "helpfulness": 34,
      "photos": [
        "https://st2.depositphotos.com/1036149/5381/i/450/depositphotos_53811511-stock-photo-duck-with-sunglasses.jpg"
      ]
    }
  }
}
const productId = 0;


describe('Individual Question', function () {
  // const user = userEvent.setup();
  // const { getByTestId, getAllByTestId } =

  beforeEach(() => {
    render(<IndividualQuestion itemName={itemName} key={index} searchInput={searchInput} question={question} productid={productId} />);
  })

  test('should render the Question', () => {
    const questionElement = screen.getByTestId('QBlock');
    expect(questionElement).toBeTruthy();
  });

  test('Yes should mark as helpful on click', () => {
    const yesClick = screen.getByTestId("questionYes");
    fireEvent.click(yesClick);

  });

  test('Should contain answer element ', () => {
    const answer = screen.getByTestId("answer");
    expect(answer).toBeTruthy();

  });

})
