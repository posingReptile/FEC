import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './relatedProduct.css'
const RelatedProducts = ({ product_id, setProductId }) => {
  const [relatedProductIds, setRelatedProductIds] = useState(Array(10).fill({id: null, name: "C", category: "J", default_price: 1, photo:""}));
  const [photoList, setPhotoList] = useState({});

  const getPhoto = async function (item, i) {
    let response = await axios.get(`/getProducts/?product_id=${item.id}&style=true`)
    let productPhoto = response.data.results[0].photos[0].url;
    return {[i]: productPhoto}
  }
  const getAllPhoto = async function (productList) {
    return await productList.data.map((item, i) => {
      return getPhoto(item, i)
    })
  }
  const getProductList = async function () {
    let productList = await axios.get(`/productsList`);
    let allPhotos = await getAllPhoto(productList);
    await Promise.all(allPhotos)
    .then((data) => {
      data = data.reduce((obj, item, i) => {
        obj[i] = item[i];
        return obj;
      }, {});
      setPhotoList(data);
      setRelatedProductIds(productList.data)
    });
  }

  useEffect(() => {
    try {
      getProductList()
    }
    catch (error) {
      console.log(error);
    }
  }, []);
  const outOfStock = "https://as1.ftcdn.net/v2/jpg/01/11/31/90/1000_F_111319094_45lQykCJGSnEg60dFt4TNxYVgAAofxkZ.jpg"
  // console.log(photoList);
  return (
    <div id="relatedProduct">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}  .src !== outOfStock ? this.src = outOfStock : null
    >
      {relatedProductIds.map((item, index) => (
        <SwiperSlide className="relatedPhotos" key={index} onClick={() => {setProductId(item.id.toString())}}>
          <img className="rPhoto" src={photoList[index] || outOfStock}></img>
          <div className="rCategory">{item.category}</div>
          <div className="rName">{item.name}</div>
          <div className="rPrice">${item.default_price}</div>
        </SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
}

export default RelatedProducts;