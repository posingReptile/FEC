import React, {useState} from 'react';
import { FaCheckCircle } from "react-icons/fa";

const Style = ({allStyleResult, setItemStyle, setMainPhoto, check, setCheck, setPhotoIndex}) => {

  return (
      <div className="styleIcons">
        {allStyleResult.map((item) => (
          <div className="styleDiv" key={item.style_id}>
            {item.style_id === check ? <FaCheckCircle id="check"/>: null}
            <img className="stylePhotos" src={item.photos[0].thumbnail_url} alt="placeHolder" onClick={() => { setCheck(item.style_id); setItemStyle(item); setPhotoIndex(0) }}></img>
          </div>
        ))}
      </div>
  );
};

export default Style;