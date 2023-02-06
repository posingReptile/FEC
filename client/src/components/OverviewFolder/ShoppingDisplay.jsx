import React, {useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./OverviewCss/shippingDisplay.css"
const ShoppingDisplay = ({cart, removeItem}) => {
  return (
    <div id="ShoppingDisplay">
      {
        cart.length === 0 ? <div id="emptyCart">Your cart is empty!</div> :
        <div id="allShoppedItem">
          {cart.map((item, index) => (
            <div key={index} className='shoppedItem'>
              <img className="cPhoto" src={item.Photo}/>
              <div className='stest'>
                <div className="shoppingTitle">
                  <div className="cName">{item.Name}</div>
                  <div className="cStyle">{item.Style}</div>
                </div>
                <div className="shoppingContent">
                  <div className="cQuantity">Size: {item.size} Qty: {item.Quantity}</div>
                  <div className="cPrice">${Number(item.Price) * item.Quantity}</div>
                </div>
              </div>
              <AiOutlineClose className="close" onClick={() => {removeItem(index)}}/>
            </div>
            ))}
        </div>
      }
    </div>
  );
};

export default ShoppingDisplay;
