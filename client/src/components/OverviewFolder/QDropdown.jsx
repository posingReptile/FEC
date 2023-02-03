import React, {useState} from "react";

const QDropdown = ({option, sizeSelector, quantity, setQuantitySelector}) => {

  let qFunc = () => {
    if (document.getElementById('qSelect')) {
      const x = document.getElementById('qSelect').value;
      console.log(x, document.getElementById('qSelect'))
      setQuantitySelector(x);
    }
  };

  let quantityArray = Array.from({length: option[sizeSelector]}, (_, i) => i + 1) || 0;

  return (
    <div className="dropdown-container" >
      {
        !option[sizeSelector] ? <select id="qSelect" disabled defaultValue="-"><option value="-">-</option></select> :
        <select id="qSelect" onChange={qFunc}>
          {quantityArray.slice(0, 15).map((item, index) => (
              <option value={item} key={index} className="dropdown-item">{item}</option>
            ))}
        </select>
      }
    </div>
  );
};

export default QDropdown;


