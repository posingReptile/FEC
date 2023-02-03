import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/productInformation.css";
import "./OverviewCss/footer.css"

import Static from "./Static.js";
import ImageGallery from './ImageGallery.jsx'
import ProductInformation from './ProductInformation.jsx'
import OverviewFooter from "./OverviewFooter.jsx";



const Overview = ({product_id, productRating}) => {

  let [item, setItem] = useState(Static.productId);
  let [itemStyle, setItemStyle] = useState(Static.productStyle.results[0]);
  let [allStyleResult, setStyleResult] = useState(Static.productStyle.results);
  let [mainPhoto, setMainPhoto] = useState(Static.productStyle.results[0].photos[0].url)
  let [expandView, setExpandView] = useState(false)
  let [zoom, setZoom] = useState(false);
  let [check, setCheck] = useState(allStyleResult[0].style_id);

  let curProduct = product_id //37323 //37311;
  useEffect(() => {
    axios.get(`/getProducts/?product_id=${curProduct}`)
    .then((data) => {
      setItem(data.data)
    })

    axios.get(`/getProducts/?product_id=${curProduct}&style=true`)
    .then((data) => {
     let productData = data.data.results;
      setItemStyle(productData[0]);
      setMainPhoto(productData[0].photos[0].url);
      setStyleResult(productData);
    })
  }, []);

  return (
    <div>
      <div id="overview">
      <div id="titleDiv"><h1 id="title">Product Overview</h1></div>
          <div id="overviewHeader">
            <ImageGallery photos={itemStyle} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto} expandView={expandView} setExpandView={setExpandView} zoom={zoom} setZoom={setZoom}/>
            {expandView ? null : <ProductInformation item={item} itemStyle={itemStyle} allStyleResult={allStyleResult}
            setItemStyle={setItemStyle} setMainPhoto={setMainPhoto} check={check}
            setCheck={setCheck} productRating={productRating}/>}
        </div>
      <OverviewFooter item={item}/>
      </div>
    </div>
  );
};

export default Overview;
