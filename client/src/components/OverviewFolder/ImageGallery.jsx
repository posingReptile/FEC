import React, {useState, useCallback, useEffect} from 'react';
import CarouselThumbnail from './CarouselThumbnail.jsx';
import { IoIosExpand } from "react-icons/io";

import "./OverviewCss/imageGallery.css";

const ImageGallery = ({photos, mainPhoto, setMainPhoto, expandView, setExpandView, zoom, setZoom, photoIndex, setPhotoIndex}) => {
  const root = document.getElementById("main");
  const mainContainer = document.getElementById("test");
  const img = document.getElementById("expandview");

  if (img && mainContainer) {
    var onZoom = useCallback(e => {
      const x = e.clientX - 700;
      const y = e.clientY - 100;
      img.style.transition = "transform 0.5s";
      img.style.transformOrigin = `${x > 0 ? x : 0}px ${y > 0 ? y : 0}px`;
      img.style.transform = "scale(2.5)";
    }, [])


    var offZoom = useCallback(e => {
      img.style.transformOrigin = "center, center"
      img.style.transform = "scale(1)";
    }, []);
 }

  let expandFunction = (zoom) => {
    if (!zoom) {
      mainContainer.style.cursor = `url('https://img.icons8.com/material-outlined/24/null/minus-math.png'), auto`;
      img.addEventListener("mousemove", onZoom);
      img.addEventListener("mouseover", onZoom);
      img.addEventListener("mouseleave", offZoom);
    } else {
      img.style.transform = "scale(1)";
      mainContainer.style.transform = "scale(1)";
      mainContainer.style.cursor = 'crosshair';
      img.removeEventListener("mousemove", onZoom);
      img.removeEventListener("mouseover", onZoom);
      img.removeEventListener("mouseleave", offZoom);
    }
  }

  const outOfStock = "https://www.sourcecon.com/wp-content/uploads/sites/3/2018/10/top-secret-700x467.png"

  return (
    <div id="imageGallery" data-testid="testIG">
      <div id="main">
        {expandView ?
        <div id="test" data-testid="isexpandview" onClick={() => {setZoom(!zoom); expandFunction(zoom)}} style={{cursor: 'crosshair'}}><img id="expandview" src={mainPhoto[photoIndex].url || outOfStock} alt="placeHolder" ></img></div> :
        <div id="test" data-testid="notexpandview" onClick={() => {setExpandView(!expandView)}} style={{cursor: 'zoom-in'}}><img id="expandview" src={mainPhoto[photoIndex].url || outOfStock} alt="placeHolder"></img></div>}
        {expandView && !zoom ? <div className="expand" onClick={() => {setExpandView(!expandView)}}><IoIosExpand /></div> : null}
      </div>
      {zoom ? null : <CarouselThumbnail photos={photos.photos} setMainPhoto={setMainPhoto} mainPhoto={mainPhoto} zoom={zoom} photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>}
    </div>
  );
};

export default ImageGallery;