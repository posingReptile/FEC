import React from 'react'
import { render, screen } from '@testing-library/react';

import CarouselThumbnail from '../CarouselThumbnail.jsx';

test('Renders the Size Dropdown', () => {
  let size = [];
  render(<CarouselThumbnail sizeOption={size}/>);

  const CThumbnail = screen.getByTestId('testSD');
  expect(CThumbnail).toBeTruthy();
});

test('Renders the Carousel Thumbnails', () => {
  const {container} = render('<CarouselThumbnail />');

  const CarouselThumbnail = container.getElementsByClassName('');
  expect(CarouselThumbnail).toBeTruthy();
});