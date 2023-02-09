import React from 'react'
import { render, screen } from '@testing-library/react';

import Style from '../Style.jsx';


beforeEach(() => {
  render(<Style allStyleResult={[]}/>);
})


test('Renders the Style Icons', () => {
  const SI = screen.getByTestId('testSI');
  expect(SI).toBeTruthy();
});

