import React, {useState, useEffect} from "react";

const Dropdown = ({placeHolder, sizeOption, setSizeSelector}) => {

  let selectFunc = () => {
    if (document.getElementById('sizeSelect')) {
      const x = document.getElementById('sizeSelect').value;
      console.log('from size', x)
      setSizeSelector(x);
    }
  };

  return (
    <div className="dropdown-container" >
      {sizeOption.length > 0 ? <select id="sizeSelect" onChange={selectFunc}>
        <option value="" disabled selected hidden>Select Size</option>
        {sizeOption.map((item, index) => (
            <option key={index} value={item} className="dropdown-item">{item}</option>
          ))}
      </select> : <select id="sizeSelect" disabled><option value="-" selected> OUT OF STOCK </option></select> }
    </div>
  );
};

export default Dropdown;