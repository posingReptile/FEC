import React from 'react'
import { render, screen } from '@testing-library/react';

import ImageGallery from '../ImageGallery.jsx';

test('Renders the Size Dropdown', () => {
  let size = [];
  render(<ImageGallery sizeOption={size}/>);

  const sDropdown = screen.getByTestId('testSD');
  expect(sDropdown).toBeTruthy();
});

test('Renders the image gallery', () => {
  const {container} = render('<ImageGallery />');

  const ImageGallery = container.getElementsByClassName('');
  expect(ImageGallery).toBeTruthy();
});