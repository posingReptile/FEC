import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/productInformation.css";
import "./OverviewCss/footer.css"

import Static from "./Static.js";
import ImageGallery from './ImageGallery.jsx'
import ProductInformation from './ProductInformation.jsx'
import OverviewFooter from "./OverviewFooter.jsx";



const Overview = ({product_id, productRating, totalNumReviews}) => {

  let [item, setItem] = useState(Static.productId);
  let [itemStyle, setItemStyle] = useState(Static.productStyle.results[0]);
  let [allStyleResult, setStyleResult] = useState(Static.productStyle.results);

  let [mainPhoto, setMainPhoto] = useState(Static.productStyle.results[0].photos);
  let [expandView, setExpandView] = useState(false)
  let [zoom, setZoom] = useState(false);
  let [check, setCheck] = useState(allStyleResult[0].style_id);

  const [photoIndex, setPhotoIndex] = useState(0);
  // console.log(check, allStyleResult[0].style_id);
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
      setMainPhoto(productData[0].photos);
      setStyleResult(productData);
    })
  }, []);

  // console.log(Static.productStyle.results[0].photos);

  useEffect(() => {
    setCheck(allStyleResult[0].style_id);
  }, [allStyleResult])

  useEffect(() => {
    setMainPhoto(itemStyle.photos);
  }, [itemStyle])

  return (
    <div>
      {item && itemStyle ? <div id="overview">
          <div id="overviewHeader">
            <ImageGallery photos={itemStyle} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto}
            expandView={expandView} setExpandView={setExpandView} zoom={zoom} setZoom={setZoom}
            photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>

            {expandView ? null : <ProductInformation item={item} itemStyle={itemStyle}
            allStyleResult={allStyleResult} setItemStyle={setItemStyle} setMainPhoto={setMainPhoto} check={check}
            setCheck={setCheck} productRating={productRating} totalNumReviews={totalNumReviews} setPhotoIndex={setPhotoIndex}/>}
        </div>
      <OverviewFooter item={item}/>
      </div>: null }
    </div>
  );
};

export default Overview;
