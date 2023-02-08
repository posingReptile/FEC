// jest.mock('axios');

// test('should fetch product item and style information', () => {
//   render(<Overview />);
//   const OV = screen.getByTestId('testOV');
//   axios.get.mockResolvedValue()
//   // .mockImplementation(() =>
//   // Promise.resolve((data => console.log(data))));
// });
import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@testing-library/react';
import Overview from '../Overview.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Jest+RTL Workshop', function() {
  const user = userEvent.setup();
  beforeEach(() => {
    render(<Overview item={{}}/>)
  })

  it('should render the overview component', () => {
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        let test = screen.getByTestId('testOV')
        expect(test).toBeTruthy();
      })
  });

  it('should render product description', () => {
    return waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
      .then(() => {
        let test = screen.getByTestId('testPI')
        expect(test).toBeTruthy();
      })
  });



});