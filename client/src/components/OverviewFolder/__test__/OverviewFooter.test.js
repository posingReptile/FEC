import React from 'react'
import { render, screen } from '@testing-library/react';

import OverviewFooter from '../OverviewFooter.jsx';

test('Renders the Size Dropdown', () => {
  render(<OverviewFooter item={{}}/>);
  const OF = screen.getByTestId('testOF');
  expect(OF).toBeTruthy();
});

