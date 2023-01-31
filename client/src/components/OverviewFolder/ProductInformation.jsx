import React from 'react';

import Dropdown from './Dropdown.jsx';
import Style from './Style.jsx';

import "./OverviewCss/productInformation.css";

const ProductInformation = ({item, itemStyle, allStyleResult, setItemStyle}) => {
  return (
      <div id="productInformation">
        <div> &#9733;&#9733;&#9733;&#9734;&#9734; Read all [#] reviews</div>
        <div>{item.category}</div>
        <div>{item.name}</div>
        <div>{itemStyle.original_price}</div>
        <div>Style > {itemStyle.name}</div>
        <Style allStyleResult={allStyleResult} setItemStyle={setItemStyle}/>
        <div id="sizeDropdown">
          <Dropdown placeHolder="Select Size" />
          <Dropdown placeHolder="Quantity" />
        </div>
        <button>Add To Bag</button>
      </div>
  );
};

export default ProductInformation;