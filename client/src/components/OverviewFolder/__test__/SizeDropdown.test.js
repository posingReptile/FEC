import React from 'react'
import { render, screen } from '@testing-library/react';

import SizeDropdown from '../SizeDropdown.jsx';

test('Renders the Size Dropdown', () => {
  render(<SizeDropdown sizeOption={[]}/>);
  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});