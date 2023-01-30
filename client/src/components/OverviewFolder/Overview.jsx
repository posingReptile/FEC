import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/imageGallery.css";
import "./OverviewCss/productInformation.css";

import CarouselThumbnail from './CarouselThumbnail.jsx';
import ProductInformation from './ProductInformation.jsx'
import OverviewFooter from "./OverviewFooter.jsx";



const Overview = (props) => {

  let [item, setItem] = useState(false);
  let [itemStyle, setItemStyle] = useState(false);
  let [mainPhoto, setMainPhoto] = useState("")

  useEffect(() => {
    axios.get(`/getProducts/?product_id=37311`)
    .then((data) => {
      setItem(data.data)
    })

    axios.get(`/getProducts/?product_id=37311&style=true`)
    .then((data) => {
      const styleResult = data.data.results[0]
      setItemStyle(styleResult);
      setMainPhoto(styleResult.photos[0].thumbnail_url);
    })
  }, []);


  // {itemStyle.photos[0].thumbnail_url}
  return (
    <div>
      <h2>Overview</h2>
        {item && itemStyle ?
          (<div id="overview">
            <div id="imageGallery">
              <img id="main" src={mainPhoto} onClick={() => {console.log(mainPhoto)}}></img>
              <CarouselThumbnail photos={itemStyle.photos} setMainPhoto={setMainPhoto}/>
            </div>
            <ProductInformation item={item} itemStyle={itemStyle}/>
          </div>)
        : null}
      <OverviewFooter item={item}/>
    </div>
  );
};

export default Overview;
