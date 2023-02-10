import React from 'react';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';
import axios from 'axios';


import Overview from '../Overview.jsx';
import Static from "../Static.js";

axios.defaults.baseURL = 'http://localhost:3000';

describe('Workshop', function() {
  const user = userEvent.setup();

  render(<Overview item={Static.productId}  handleDataClick={() => {}}/>)

  it('should render the overview component', () => {
    let test = screen.getByTestId('testOV')
    expect(test).toBeTruthy();
  });

  it('should render product description', () => {
    let test = screen.getByTestId('testPI')
    expect(test).toBeTruthy();
  });

  test('add to cart when the cart is empty', () => {
    const yesExpend = screen.getByTestId("addBagButton");
    fireEvent.click(yesExpend);
  });

  test('select', () => {
    const { getByTestId, getAllByTestId } = screen;

    fireEvent.change(getByTestId('testSD'), { target: { value: 'S' } })
    let options = getAllByTestId('selectOption')
    expect(options[1].selected).toBeTruthy();

  });


  test('select', () => {
    const { getByTestId, getAllByTestId } = screen;

    fireEvent.change(getByTestId('testQD'), { target: { value: '1' } })
    let options = getAllByTestId('QDOption')
    expect(options[0].selected).toBeTruthy();
  });

  test('img button', () => {
    const yesZoom = screen.getByTestId("styleIconImg1");
    fireEvent.click(yesZoom);
  });


  test('Enter expanded view', () => {
    const yesExpend = screen.getByTestId("notexpandview");
    fireEvent.click(yesExpend);
  });

  test('Enter zoom view', () => {
    const yesZoom = screen.getByTestId("isexpandview");
    fireEvent.click(yesZoom);
  });

  test('Exit zoom view', () => {
    const yesZoom = screen.getByTestId("isexpandview");
    fireEvent.click(yesZoom);
  });

  // test('Exit expanded view', () => {
  //   const yesExpend = screen.getByTestId("notexpandview");
  //   fireEvent.click(yesExpend);
  // });


  test('botScrollButton', () => {
    const yesZoom = screen.getByTestId("botScrollButton");
    fireEvent.click(yesZoom);
  });

  // test('topScrollButton', () => {
  //   const yesZoom = screen.getByTestId("topScrollButton");
  //   fireEvent.click(yesZoom);
  // });

  test('rightScrollButton', () => {
    const yesZoom = screen.getByTestId("rightScrollButton");
    fireEvent.click(yesZoom);
  });

  test('leftScrollButton', () => {
    const yesZoom = screen.getByTestId("leftScrollButton");
    fireEvent.click(yesZoom);
  });

  test('change main photo by clicking on carousel thumbnail', () => {
    const yesZoom = screen.getByTestId("changePhoto2");
    fireEvent.click(yesZoom);
  });

  test('scrolling the carousel should affect the buttons', () => {
    const yesScroll = screen.getByTestId("testHC");
    fireEvent.scroll(yesScroll, { target: { scrollY: 5 } });
  });



});