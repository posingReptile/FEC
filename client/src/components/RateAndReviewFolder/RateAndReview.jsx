import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RateAndReview = ({ product_id }) => {
  const [productReviews, setReviews] = useState([]);
  const [productMeta, setProductMeta] = useState({});
  const [productChar, setChar] = useState([])

  useEffect(() => {
    axios.get(`getReviews/?product_id=${product_id}`)
      .then(data => {
        setReviews(data.data.results);
      })

    axios.get(`getReviewsMeta/?product_id=${product_id}`)
      .then(data => {
        // console.log('this is data from meta :', data.data)
        let meta = data.data
        setProductMeta(meta);
        let characteristics = meta.characteristics;
        let charArr = [];
        for (let key in characteristics) {
          let rating = characteristics[key].value
          let percentRating = (rating / 5) * 100;

          charArr.push({
            'name': key,
            'percent': percentRating,
            'value': characteristics[key].value,
            'id': characteristics[key].id
          });
        }
        console.log('this is charArr', charArr)
        setChar(charArr);
      })
  }, []);


  return (
    <div data-testid="rating-main">
      <h2>Ratings And Reviews</h2>
      <div>
      <RatingBreakdown product_id={product_id}/>
      <ProductBreakdown productChar={productChar}/>
      <ReviewsList product_id={product_id}/>
      </div>
    </div>
  )
}

export default RateAndReview;