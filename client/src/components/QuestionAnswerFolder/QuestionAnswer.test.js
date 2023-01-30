import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer'
import {describe, expect, test} from '@jest/globals'
import React from 'react'
import App from '../App'




test('renders the Question Answer page ', () => {
  const {container} = render(<QuestionAnswer />);

  const questions = container.getElementsByClassName('Questions');
  console.log(questions)
  expect(questions.length).toBe(1);


});