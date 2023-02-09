import React, {useState} from "react";

const QDropdown = ({option, sizeSelector, quantity, setQuantitySelector}) => {

  let qFunc = () => {
    if (document.getElementById('qSelect')) {
      const x = document.getElementById('qSelect').value;
      setQuantitySelector(x);
    }
  };

  let quantityArray = Array.from({length: option[sizeSelector]}, (_, i) => i + 1) || 0;

  return (
    <div id="qDropdown" >
      {
        !option[sizeSelector] ? <select id="qSelect" data-testid="testQD" disabled defaultValue="-"><option value="-">-</option></select> :
        <select data-testid="testQD" id="qSelect" onChange={qFunc}>
          {quantityArray.slice(0, 15).map((item, index) => (
              <option data-testid="QDOption" value={item} key={index} className="dropdown-item">{item}</option>
            ))}
        </select>
      }
    </div>
  );
};

export default QDropdown;


