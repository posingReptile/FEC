import React from 'react'
import { render, screen } from '@testing-library/react';

import QDropdown from '../QDropdown.jsx';

test('Renders the Quantity Downdown', () => {
  render(<QDropdown option={{}} sizeSelector={0}/>);
  const QD = screen.getByTestId('testQD');
  expect(QD).toBeTruthy();
});