import React from 'react'
import ReactDOM from 'react-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals'
import userEvent from '@testing-library/user-event';
import NewQuestion from '../NewQuestion'

const itemName = 'test'
const product_id  = 0;


describe('New Question', function () {
  // const user = userEvent.setup();
  // const { getByTestId, getAllByTestId } =

  beforeEach(() => {
    render(<NewQuestion productId={product_id} itemName={itemName} />);
  })

  test('should render the Answer Form', () => {
    const newQuestionFormElement = screen.getByTestId('newQuestionForm');
    expect(newQuestionFormElement).toBeTruthy();
  });

})
