import React, {useStates} from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

import ImageGallery from '../ImageGallery.jsx';


describe('functions', () => {

  beforeEach(()=> {
    let value = false;
    render(<ImageGallery expandView={value}
      photoIndex={0} mainPhoto={[{}]} photos={{}} setExpandView={() => {value = true}}/>);
  });

  it('Renders the Image Gallery', () => {
    const IG = screen.getByTestId('testIG');
    expect(IG).toBeTruthy();
  });
})

