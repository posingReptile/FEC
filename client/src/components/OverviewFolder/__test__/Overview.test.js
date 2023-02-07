import React from 'react'
import { render, screen } from '@testing-library/react';

import Overview from '../Overview.jsx';

test('Renders the Size Dropdown', () => {
  let size = [];
  render(<Overview sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});