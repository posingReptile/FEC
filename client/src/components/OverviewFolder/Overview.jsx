import React, {useEffect, useState} from 'react';
import axios from 'axios';

import "./OverviewCss/overview.css";
import "./OverviewCss/productInformation.css";
import "./OverviewCss/footer.css"

import Static from "./Static.js";
import ImageGallery from './ImageGallery.jsx'
import ProductInformation from './ProductInformation.jsx'
import OverviewFooter from "./OverviewFooter.jsx";



const Overview = ({product_id, productRating, totalNumReviews, cart, setCart, item, setItem, handleDataClick}) => {

  let [itemStyle, setItemStyle] = useState(Static.productStyle.results[0]);
  let [allStyleResult, setStyleResult] = useState(Static.productStyle.results);
  let [mainPhoto, setMainPhoto] = useState(Static.productStyle.results[0].photos);
  let [expandView, setExpandView] = useState(false)
  let [zoom, setZoom] = useState(false);
  let [check, setCheck] = useState(allStyleResult[0].style_id);

  const [photoIndex, setPhotoIndex] = useState(0);
  let curProduct = product_id //37323 //37311;

 function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  return [count, () => setCount(count + 1)];
}


  const productAxios = () => {
    axios.get(`/getProducts/?product_id=${curProduct}`)
    .then((data) => {
      setItem(data.data)
    }).then(() => {
      axios.get(`/getProducts/?product_id=${curProduct}&style=true`)
      .then((data) => {
       let productData = data.data.results;
        setItemStyle(productData[0]);
        setMainPhoto(productData[0].photos);
        setStyleResult(productData);
      });
    })
  }

  useEffect(() => {
    productAxios();
  }, [product_id]);

  useEffect(() => {
    setCheck(allStyleResult[0].style_id);
  }, [allStyleResult])

  useEffect(() => {
    setMainPhoto(itemStyle.photos);
  }, [itemStyle])

  return (
    <div onClick={(e) => handleDataClick(e, 'Overview')}>
       <div id="overview" data-testid="testOV" >
          <div id="overviewHeader">
            <ImageGallery photos={itemStyle} mainPhoto={mainPhoto} setMainPhoto={setMainPhoto}
            expandView={expandView} setExpandView={setExpandView} zoom={zoom} setZoom={setZoom}
            photoIndex={photoIndex} setPhotoIndex={setPhotoIndex}/>

            {expandView ? null : <ProductInformation item={item} itemStyle={itemStyle}
            allStyleResult={allStyleResult} setItemStyle={setItemStyle} setMainPhoto={setMainPhoto} check={check}
            setCheck={setCheck} productRating={productRating} totalNumReviews={totalNumReviews} setPhotoIndex={setPhotoIndex} cart={cart} setCart={setCart}/>}
        </div>
      <OverviewFooter item={item}/>
      </div>
    </div>
  );
};

export default Overview;
