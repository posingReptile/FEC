import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/imageGallery.css";
import "./OverviewCss/productInformation.css";

import Dropdown from './Dropdown.jsx';
import CarouselThumbnail from './CarouselThumbnail.jsx';
import Style from './Style.jsx';


const Overview = (props) => {

  let [item, setItem] = useState({});
  let [itemStyle, setItemStyle] = useState([]);
  let [mainPhoto, setMainPhoto] = useState("")

  useEffect(() => {
    axios.get('/getProducts/?product_id=37311')
    .then((data) => {
      setItem(data.data)
    })

    axios.get('/getProducts/?product_id=37311&style=true')
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
      <div id="overview">
        <div id="imageGallery">
          <img id="main" src={mainPhoto} onClick={() => {console.log(mainPhoto)}}></img>
          <CarouselThumbnail photos={itemStyle.photos}/>
        </div>
        <div id="productInformation">
       <div> &#9733;&#9733;&#9733;&#9734;&#9734; Read all [#] reviews</div>
          <div>{item.category}</div>
          <div>{item.name}</div>
          <div>{itemStyle.original_price}</div>
          <div>Style > {itemStyle.name}</div>
            <Style photos={itemStyle.photos}/>
            <div id="sizeDropdown">
              <Dropdown placeHolder="Select Size" />
              <Dropdown placeHolder="Quantity" />
            </div>
          <button>Add To Bag</button>
        </div>
      </div>

      <div id="overviewFooter">
        <div>
          <h2>Product description</h2>
          <div>{item.description}</div>
        </div>
        <div>Social Media</div>
      </div>

    </div>
  )
}

export default Overview;
