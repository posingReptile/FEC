import React, {useState, useEffect} from 'react';

import SizeDropdown from './SizeDropdown.jsx';
import Style from './Style.jsx';
import QDropdown from './QDropdown.jsx'
import Modal from 'react-modal';
import ShoppingDisplay from './ShoppingDisplay.jsx'
import {StyledStarRating} from '../styled/StarRating.styled.js';
import { BsPinterest, BsFacebook, BsTwitter } from "react-icons/bs";
import "./OverviewCss/productInformation.css";
import "./OverviewCss/dropdown.css";

const ProductInformation = ({item, itemStyle, allStyleResult, setItemStyle, check, setCheck, productRating, totalNumReviews, setPhotoIndex, cart, setCart}) => {

  const [sizeSelector, setSizeSelector] = useState('Select Size');
  const [quantity, setQuantitySelector] = useState(1);
  const [displayErr, setDisplayErr] = useState(false);
  const [modalIsOpen, setModal] = useState(false);

  let size = [];
  let quantityObj = {};

  let ratingPercent = (productRating * 100) / 5;
  ratingPercent = (ratingPercent % 5) >= 2.5 ? parseInt(ratingPercent / 5) * 5 + 5 : parseInt(ratingPercent / 5) * 5

  Object.keys(itemStyle.skus).map(styleId => {
    return itemStyle.skus[styleId]
  }).forEach(item => {
    if (item.quantity > 0) {
      size.push(item.size);
      quantityObj[item.size] = item.quantity
    }
  })

  const addCart = () => {
    if(sizeSelector === 'Select Size') {
      setDisplayErr(!displayErr)
      setTimeout(() => {setDisplayErr(displayErr)}, 1000);
    } else {
      let curCart = {};
      curCart.index = cart.length;
      curCart.Photo = itemStyle.photos[0].thumbnail_url;
      curCart.Name = item.name;
      curCart.Style = itemStyle.name;
      curCart.Price = itemStyle.sale_price || itemStyle.original_price;
      curCart.size = sizeSelector;
      curCart.Quantity = quantity;
      let newCart = cart.concat(curCart);
      setCart(newCart);
    }
  }
  const removeItem = (index) => {
    let deleted = cart.slice()
    deleted.splice(index, 1);
    setCart(deleted);
  }

  return (
      <div id="productInformation" data-testid="testPI">
        <div id="productRating"><StyledStarRating ratingPercent={ratingPercent}/>{totalNumReviews === 0 ? null : <a href="/#rlink">Read all {totalNumReviews} reviews</a>}</div>
        <div id="category">{item.category}</div>
        <h1 id="itemName">{item.name}</h1>
        {itemStyle.sale_price ?
        <div id="itemPrice">
          <p><s>${itemStyle.original_price}</s></p> &nbsp;
          <p style={{color: 'red'}}>${itemStyle.sale_price}</p>
        </div> : <div id="itemPrice">${itemStyle.original_price}</div>}
        <div><strong>STYLE &gt; </strong>{itemStyle.name}</div>
        <Style allStyleResult={allStyleResult} setItemStyle={setItemStyle} check={check} setCheck={setCheck} setPhotoIndex={setPhotoIndex}/>
        {displayErr ? <p style={{color: 'red'}}>Please select a size</p> : null}
        <div id="dropdown">
          <SizeDropdown sizeOption={size} setSizeSelector={setSizeSelector}/>
          <QDropdown option={quantityObj} sizeSelector={sizeSelector} setQuantitySelector={setQuantitySelector} quantity={quantity}/>
        </div>
        <div className="checkout">
        {size.length > 0 ? <button id="addToBag" data-testid="addBagButton" onClick={addCart}>Add To Bag</button> : null}
        <button id="addToCart" onClick={() => {setModal(true);}}>Show Cart</button>

        <Modal className="shoppingModal"isOpen={modalIsOpen} onRequestClose={() => {setModal(false)}}>
          <ShoppingDisplay cart={cart} removeItem={removeItem}/>
          <button id="checkOut"onClick={() => {setModal(false); setCart([])}}>Check out</button>
        </Modal>
        </div>
        <div className="socialMedia">
          <div className="smIcon">
          <a href="https://www.facebook.com/"><BsFacebook id="facebook"/></a>
          <a href="https://twitter.com/?lang=en"><BsTwitter id="twitter"/></a>
          <a href="https://www.pinterest.com/"><BsPinterest id="pinterest"/></a>
          </div>
        </div>
      </div>
  );
};

export default ProductInformation;