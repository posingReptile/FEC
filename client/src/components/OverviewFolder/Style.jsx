import React, {useState} from 'react';
import { IoIosCheckbox } from "react-icons/io";

const Style = ({allStyleResult, setItemStyle, setMainPhoto, check, setCheck}) => {

  return (
      <div className="styleIcons">
        {allStyleResult.map((item) => (
          <div className="styleDiv" key={item.style_id}>
            {item.style_id === check ? <div className="check"><IoIosCheckbox /></div> : null}
            <img className="stylePhotos" src={item.photos[0].thumbnail_url} alt="placeHolder" onClick={() => { setCheck(item.style_id); setItemStyle(item); setMainPhoto(item.photos[0].url)}}></img>
          </div>
        ))}
      </div>
  );
};

export default Style;