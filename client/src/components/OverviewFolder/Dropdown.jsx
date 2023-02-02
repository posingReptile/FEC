import React, {useState, useEffect} from "react";
import { IoIosArrowDown } from "react-icons/io";
// import "./OverviewCss/dropdown.css";


const Dropdown = ({placeHolder, sizeOption, setSizeSelector}) => {
  let [showDrop, setShowDrop] = useState(false);
  let [selectedValue, setSelectedValue] = useState(null);
  let style = {
    visibility: showDrop ? null : 'hidden'
  }
  useEffect(() => {
    const handler = () => setShowDrop(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener('click', handler)
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowDrop(!showDrop);
  }

  return (
    <div className="dropdown-container" >
      <div className="dropdown-input" onClick={handleInputClick}>
        <div className="dropdown-selected-value">{placeHolder}</div>
        <div className="dropdown-tools"><IoIosArrowDown /></div>
      </div>
        <div className="dropdown-menu" style={style}>
          {sizeOption.map((item, index) => (
            <div key={index} className="dropdown-item" onClick={() => {setSizeSelector(item)}}>{item}</div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;