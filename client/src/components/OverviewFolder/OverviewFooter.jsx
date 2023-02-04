import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { BsPinterest, BsFacebook, BsTwitter } from "react-icons/bs";

const OverviewFooter = ({item}) => {

  return (
      <div id="overviewFooter">
        <div className="productDescription">
          <h2>Product description</h2>
          <div>{item.description}</div>
        </div>
        <div className="socialMedia">
          <div className="smIcon">
            <BsFacebook id="facebook"/>
            <BsTwitter id="twitter"/>
            <BsPinterest id="pinterest"/>
          </div>
        </div>
      </div>
  );
};

export default OverviewFooter;