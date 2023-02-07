import React from 'react'
import { render, screen } from '@testing-library/react';

import ProductInformation from '../ProductInformation.jsx';

test('Renders the Product Information', () => {
  render(<ProductInformation item={{}} itemStyle={{skus: 'test'}} allStyleResult={[]}/>);
  const PI = screen.getByTestId('testPI');
  expect(PI).toBeTruthy();
});
