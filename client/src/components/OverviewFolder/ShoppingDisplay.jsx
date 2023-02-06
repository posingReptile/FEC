import React, {useEffect} from "react";

const ShoppingDisplay = ({cart}) => {

  return (
    <div id="ShoppingDisplay">
      {
        cart.length === 0 ? <div>Your cart is empty!</div> :
        // <div id="shoppedItem" onChange={qFunc}>
        //   {cart.map((item, index) => (
        //       <div value={item} key={index} className="dropdown-item">{item}</div>
        //     ))}
        // </div>
        <div>car</div>
      }
    </div>
  );
};

export default ShoppingDisplay;