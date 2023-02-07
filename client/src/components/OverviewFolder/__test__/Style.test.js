import React from 'react'
import { render, screen } from '@testing-library/react';

import Style from '../Style.jsx';

test('Renders the Style Icons', () => {
  render(<Style allStyleResult={[]}/>);
  const SI = screen.getByTestId('testSI');
  expect(SI).toBeTruthy();
});
