import React, {useState, useCallback} from 'react';
import { IoIosExpand } from "react-icons/io";
import "./OverviewCss/imageGallery.css";
import CarouselThumbnail from './CarouselThumbnail.jsx';

const ImageGallery = ({photos, mainPhoto, setMainPhoto, expandView, setExpandView}) => {

  const mainContainer = document.getElementById("test");
  const img = document.getElementById("expandview");

  if (img && mainContainer) {
    var onZoom = useCallback(e => {
      const x = e.clientX - e.target.offsetLeft;
      const y = e.clientY - e.target.offsetTop;
      img.style.transition = "transform 0.5s";
      img.style.transformOrigin = `${x}px ${y}px`;
      img.style.transform = "scale(2)";
    }, [])
    var offZoom = useCallback(e => {
        img.style.transform = "scale(1)";
    }, []);
 }

  let expandFunction = (expandView) => {
    if (!expandView) {
      img.style.cursor = 'crosshair'
      img.addEventListener("mousemove", onZoom);
      img.addEventListener("mouseover", onZoom);
      img.addEventListener("mouseleave", offZoom);
    } else {
      img.style.cursor = 'zoom-in'
      img.removeEventListener("mousemove", onZoom);
      img.removeEventListener("mouseover", onZoom);
      img.removeEventListener("mouseleave", offZoom);
    }
  }

  return (
    <div id="imageGallery">
      <div id="main">
        <div id="test"><img id="expandview" src={mainPhoto} ></img></div>
        <div className="expand" onClick={()=> {setExpandView(!expandView); expandFunction(expandView)}}><IoIosExpand /></div>
      </div>
      <CarouselThumbnail photos={photos.photos} setMainPhoto={setMainPhoto} mainPhoto={mainPhoto}/>
    </div>
  );
};

export default ImageGallery;