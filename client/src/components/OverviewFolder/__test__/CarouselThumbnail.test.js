import React from 'react'
import { render, screen } from '@testing-library/react';

import CarouselThumbnail from '../CarouselThumbnail.jsx';

test('Renders the Carousel Thumbnail', () => {
  render(<CarouselThumbnail mainPhoto={[]}/>);
  const CT = screen.getByTestId('testHC');
  expect(CT).toBeTruthy();
});
