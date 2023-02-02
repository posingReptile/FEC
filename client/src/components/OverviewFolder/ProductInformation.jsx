import React, {useState} from 'react';

import Dropdown from './Dropdown.jsx';
import Style from './Style.jsx';
import QDropdown from './QDropdown.jsx'

import "./OverviewCss/productInformation.css";
import "./OverviewCss/dropdown.css";

const ProductInformation = ({item, itemStyle, allStyleResult, setItemStyle, setMainPhoto}) => {
  const [sizeSelector, setSizeSelector] = useState('Select Size')
  let [quantity, setQuantitySelector] = useState('-')
  let size = [];
  let quantityObj = {};

  Object.keys(itemStyle.skus).map(styleId => {
    return itemStyle.skus[styleId]
  }).forEach(item => {
    if (item.quantity > 0) {
      size.push(item.size);
      quantityObj[item.size] = item.quantity
    }
  })
  if (size.length === 0) {
    setSizeSelector('Out Of Stock');
  }

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
          <Dropdown placeHolder={sizeSelector} sizeOption={size} setSizeSelector={setSizeSelector}/>
          <QDropdown option={quantityObj} sizeSelector={sizeSelector} setQuantitySelector={setQuantitySelector}/>
        </div>
        <div className="checkout">
           <button>Add To Bag</button>
        </div>
      </div>
  );
};

export default ProductInformation;