import React from 'react'
import { render, screen } from '@testing-library/react';

// import Overview from '../Overview.jsx'
// import ProductInformation from '../ProductInformation.jsx'
import SizeDropdown from '../SizeDropdown.jsx';

test('Renders the Size Dropdown', () => {
  // render(<Overview />);
  // render(<ProductInformation />);
  let size = [];
  render(<SizeDropdown sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});