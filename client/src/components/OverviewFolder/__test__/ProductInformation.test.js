import React from 'react'
import { render, screen } from '@testing-library/react';

import ProductInformation from '../ProductInformation.jsx';

test('Renders the Product Information', () => {
  render(<ProductInformation item={{}} itemStyle={{skus: 'test'}} allStyleResult={[]}/>);
  const PI = screen.getByTestId('testPI');
  expect(PI).toBeTruthy();
});

describe('Button component', () => {
  it('should render a button with the text "Click me"', () => {
    const { getByText } = render( <button id="addToCart" onClick={() => {setModal(true);}}>Show Cart</button>);
    const button = getByText('Show Cart');
    expect(button).toBeInTheDocument();
  });
});