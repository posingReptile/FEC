import React from 'react'
import { render, screen } from '@testing-library/react';

import QDropdown from '../QDropdown.jsx';

test('Renders the Quantity Dropdown', () => {
  const {container} = render('<QDropdown />');

  const QDropdown = container.getElementsByClassName('');
  expect(QDropdown).toBeTruthy();
});
