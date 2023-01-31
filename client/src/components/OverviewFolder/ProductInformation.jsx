import React from 'react';

import Dropdown from './Dropdown.jsx';
import Style from './Style.jsx';

import "./OverviewCss/productInformation.css";

const ProductInformation = ({item, itemStyle, allStyleResult, setItemStyle, setMainPhoto}) => {
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
        <div><strong>Style > </strong>{itemStyle.name}</div>
        <Style allStyleResult={allStyleResult} setItemStyle={setItemStyle} setMainPhoto={setMainPhoto}/>
        <div id="sizeDropdown">
          <Dropdown placeHolder="Select Size" />
          <Dropdown placeHolder="Quantity" />
        </div>
        <button>Add To Bag</button>
      </div>
  );
};

export default ProductInformation;