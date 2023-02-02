import React, {useState} from "react";
import { IoIosArrowDown } from "react-icons/io";


const QDropdown = ({option, sizeSelector }) => {
  const [quantity, setQuantitySelector] = useState('-')
  let [showDrop, setShowDrop] = useState(false);

  let style = {
    visibility: showDrop ? null : 'hidden'
  }
  // console.log(option, sizeSelector, option[sizeSelector]);

  let quantityArray = Array.from({length: option[sizeSelector]}, (_, i) => i + 1) || 0;
  return (
    <div className="dropdown-container" >
      <div className="dropdown-input" onClick={()=>{setShowDrop(!showDrop)}}>
        <div className="dropdown-selected-value">{quantity}</div>
        <div className="dropdown-tools">
            <IoIosArrowDown />
        </div>
      </div>
        <div className="dropdown-menu" style={style}>
          {quantityArray.slice(0, 15).map((item, index) => (
            <div key={index} className="dropdown-item" onClick={() => {setQuantitySelector(item)}}>{item}</div>
          ))}
      </div>
    </div>
  );
};

export default QDropdown;
