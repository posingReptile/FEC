import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RelatedProducts = ({ product_id }) => {
  const [relatedProductIds, setRelatedProductIds] = useState([]);
  //this could be array of related product ids


  useEffect(()=> {

  }, []);






  //this is temporary to make 10 slides
  let carouselArr = Array(10).fill(0);

  return (
    <div>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {carouselArr.map((_, index) => (
        <SwiperSlide key={index}>Slide {index + 1}</SwiperSlide>
        ))}
    </Swiper>
    </div>
  );
}

export default RelatedProducts;