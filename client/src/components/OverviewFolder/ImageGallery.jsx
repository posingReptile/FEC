import React, {useState} from 'react';

import "./OverviewCss/imageGallery.css";
import CarouselThumbnail from './CarouselThumbnail.jsx';

const ImageGallery = ({photos, mainPhoto, setMainPhoto}) => {
// console.log('this is from ImageGallery', photos);
  return (
    <div id="imageGallery">
      <div id="main">
        <img id="mainPhoto" src={mainPhoto} onClick={() => {console.log(mainPhoto)}}></img>
      </div>
      <CarouselThumbnail photos={photos.photos} setMainPhoto={setMainPhoto} mainPhoto={mainPhoto}/>
    </div>
  );
};

export default ImageGallery;