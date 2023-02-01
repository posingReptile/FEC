import React, {useState} from 'react';

import Dropdown from './Dropdown.jsx';
import Style from './Style.jsx';
import QDropdown from './QDropdown.jsx'

import "./OverviewCss/productInformation.css";

const ProductInformation = ({item, itemStyle, allStyleResult, setItemStyle, setMainPhoto}) => {
  const [sizeSelector, setSizeSelector] = useState('Select Size')
  let size = [];
  let quantity = {};
  // itemStyle.skus is a object of objects it contains a style id  as a key and the quanitiy and size as value
  // We want to turn the

  Object.keys(itemStyle.skus).map(styleId => {
    return itemStyle.skus[styleId]
  }).forEach(item => {
    // console.log(item)
    if (item.quantity > 0) {
      size.push(item.size);
      quantity[item.size] = item.quantity
    }
  })
  if (size.length === 0) {
    setSizeSelector('Out Of Stock');
  }
  // console.log('quantity: ', quantity, size);
  // console.log('size: ', size);
  const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

  return (
      <div id="productInformation">
        <div> &#9733;&#9733;&#9733;&#9734;&#9734; Read all [#] reviews</div>
        <div id="category">{item.category}</div>
        <h2 id="itemName">{item.name}</h2>
        {itemStyle.sale_price ?
        <div id="itemPrice">
          <p><s>${itemStyle.original_price}</s></p> &nbsp;
          <p style={{color: 'red'}}>${itemStyle.sale_price}</p>
        </div> : <div id="itemPrice">${itemStyle.original_price}</div>}
        <div><strong>Style &gt; </strong>{itemStyle.name}</div>
        <Style allStyleResult={allStyleResult} setItemStyle={setItemStyle} setMainPhoto={setMainPhoto}/>
        <div id="sizeDropdown">
          <Dropdown placeHolder={sizeSelector} sizeOption={size} setSizeSelector={setSizeSelector} Icon={Icon}/>
          <QDropdown placeHolder="-" option={quantity} Icon={Icon} sizeSelector={sizeSelector} setSizeSelector={setSizeSelector}/>
        </div>
        <button>Add To Bag</button>
      </div>
  );
};

export default ProductInformation;