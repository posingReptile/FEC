import React, {useState, useEffect} from "react";

const SizeDropdown = ({sizeOption, setSizeSelector}) => {

  let selectFunc = () => {
    if (document.getElementById('sizeSelect')) {
      const x = document.getElementById('sizeSelect').value;
      setSizeSelector(x);
    }
  };

  return (
    <div id="sizeDropdown">
      {sizeOption.length > 0 ?
        <select id="sizeSelect" data-testid="testSD" onChange={selectFunc} defaultValue="Select Size">
          <option value="" hidden>Select Size</option>
          {sizeOption.map((item, index) => (
              <option data-testid="selectOption" key={index} value={item} className="dropdown-item">{item}</option>
            ))}
        </select> :
        <select id="sizeSelect" disabled><option value="-" selected> OUT OF STOCK </option></select> }
    </div>
  );
};

export default SizeDropdown;