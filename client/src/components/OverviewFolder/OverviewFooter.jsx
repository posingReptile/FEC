import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsPinterest, BsFacebook, BsTwitter } from "react-icons/bs";

const OverviewFooter = ({item}) => {

  return (
      <div id="overviewFooter">
        <div className="productDescription">
          <h2>Product description</h2>
          <div id="itemDescription">{item.description}</div>
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

export default OverviewFooter;