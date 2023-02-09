import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals'
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
