import React from 'react'
import { render, screen } from '@testing-library/react';

import ImageGallery from '../ImageGallery.jsx';

test('Renders the Image Gallery', () => {
  render(<ImageGallery expandView={false} photoIndex={0} mainPhoto={[{}]} photos={{}}/>);
  const IG = screen.getByTestId('testIG');
  expect(IG).toBeTruthy();
});

