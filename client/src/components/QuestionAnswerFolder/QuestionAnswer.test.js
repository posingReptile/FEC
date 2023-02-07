import { render, screen } from '@testing-library/react';
import QuestionAnswer from './QuestionAnswer'
import {describe, expect, test} from '@jest/globals'
import React from 'react'



it ('renders without crashing', ()=> {
  <QuestionAnswer />;
})

it('renders the Question Answer text ', async () => {
  const wrapper = <QuestionAnswer />;
  const qa = <h3>Questions & Answers</h3>
  expect(wrapper.toContain(qa)).toEqual(true);
});