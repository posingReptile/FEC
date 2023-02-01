import React, {useState} from "react";

import "./OverviewCss/dropdown.css";

const QDropdown = ({option, setSizeSelector, Icon, sizeSelector}) => {
  const [quanitiy, setQuanitiySelector] = useState('-')

  let [showDrop, setShowDrop] = useState(false);

  let style = {
    visibility: showDrop ? null : 'hidden'
  }

  console.log(option, sizeSelector, option[sizeSelector]);
  let quanitiyArray = Array.from({length: option[sizeSelector]}, (_, i) => i + 1) || 0;
  return (
    <div className="dropdown-container" >
      <div className="dropdown-input" onClick={()=>{setShowDrop(!showDrop)}}>
        <div className="dropdown-selected-value">{quanitiy}</div>
        <div className="dropdown-tools">
            <Icon />
        </div>
      </div>
        <div className="dropdown-menu" style={style}>
          {quanitiyArray.slice(0, 15).map((item, index) => (
            <div key={index} className="dropdown-item" onClick={() => {setQuanitiySelector(item)}}>{item}</div>
          ))}
      </div>
    </div>
  );
};

export default QDropdown;
