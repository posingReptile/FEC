import React, {useState} from "react";

// import "./OverviewCss/dropdown.css";


const Dropdown = ({placeHolder, sizeOption, setSizeSelector, Icon}) => {
  let [showDrop, setShowDrop] = useState(false);
  let style = {
    visibility: showDrop ? null : 'hidden'
  }
  // console.log(option);
  return (
    <div className="dropdown-container" >
      <div className="dropdown-input" onClick={()=>{setShowDrop(!showDrop)}}>
        <div className="dropdown-selected-value">{placeHolder}</div>
        <div className="dropdown-tools"><Icon /></div>
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