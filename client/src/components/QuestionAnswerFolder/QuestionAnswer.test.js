import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer'
import {describe, expect, test} from '@jest/globals'
import React from 'react'
import App from '../App'




test('renders the landing page', () => {
  render(<App />);
});