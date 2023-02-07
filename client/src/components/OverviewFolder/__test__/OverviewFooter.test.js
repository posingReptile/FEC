import React from 'react'
import { render, screen } from '@testing-library/react';

import OverviewFooter from '../OverviewFooter.jsx';


test('Renders the Size Dropdown', () => {
  let size = [];
  render(<OverviewFooter sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});

test('Renders the Overview', () => {
  const {container} = render('<Overview />');

  const Overview = container.getElementsByClassName('');
  expect(Overview).toBeTruthy();

});