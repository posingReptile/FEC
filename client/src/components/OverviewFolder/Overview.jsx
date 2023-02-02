import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/productInformation.css";
import "./OverviewCss/footer.css"

import Static from "./Static.js";
import ImageGallery from './ImageGallery.jsx'
import ProductInformation from './ProductInformation.jsx'
import OverviewFooter from "./OverviewFooter.jsx";



const Overview = (props) => {

  let [item, setItem] = useState(Static.productId);
  let [itemStyle, setItemStyle] = useState(Static.productStyle.results[0]);
  let [allStyleResult, setStyleResult] = useState(Static.productStyle.results);
  let [mainPhoto, setMainPhoto] = useState(Static.productStyle.results[0].photos[0].url)
  let [expandView, setExpandView] = useState(false)

  useEffect(() => {
    axios.get(`/getProducts/?product_id=37311`)
    .then((data) => {
      setItem(data.data)
    })

    axios.get(`/getProducts/?product_id=37311&style=true`)
    .then((data) => {
     let productData = data.data.results;
      setItemStyle(productData[0]);
      setMainPhoto(productData[0].photos[0].url);
      setStyleResult(productData);
    })
  }, []);


  // console.log(Static.productId)
  return (
    <div id="overview">
      <h1>Overview</h1>
          <div id="overviewHeader">
            <ImageGallery photos={itemStyle} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} expandView={expandView} setExpandView={setExpandView}/>
            {expandView ? null : <ProductInformation item={item} itemStyle={itemStyle} allStyleResult={allStyleResult} setItemStyle={setItemStyle} setMainPhoto={setMainPhoto}/>}
          </div>
      <OverviewFooter item={item}/>
    </div>
  );
};

export default Overview;
