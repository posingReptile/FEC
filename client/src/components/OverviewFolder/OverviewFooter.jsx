import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";

const OverviewFooter = ({item}) => {

  return (
      <div id="overviewFooter">
        <div className="productDescription">
          <h2>Product description</h2>
          <div>{item.description}</div>
        </div>
        <div className="socialMedia">
          <h2>Follow Us</h2>
          <div className="smIcon">
            <img src="https://img.icons8.com/color/48/null/facebook.png"/>
            <img src="https://img.icons8.com/color/48/null/twitter--v2.png"/>
            <img src="https://img.icons8.com/color/48/null/pinterest--v1.png"/>
          </div>
        </div>
      </div>
  );
};

export default OverviewFooter;