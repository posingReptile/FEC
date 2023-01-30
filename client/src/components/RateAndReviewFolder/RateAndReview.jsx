import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RateAndReview = ({ product_id }) => {
  const [productReviews, setReviews] = useState([]);
  const [productMeta, setProductMeta] = useState({});
  const [productChar, setChar] = useState([])
  const [productRating, setRating] = useState({});

  useEffect(() => {
    axios.get(`getReviews/?product_id=${product_id}`)
      .then(data => {
        setReviews(data.data.results);
      })

    axios.get(`getReviewsMeta/?product_id=${product_id}`)
      .then(data => {
        let meta = data.data
        setProductMeta(meta);

        // star rating breakdown
        let totalRatings = 0;
        let ratings = meta.ratings;
        for (let rate in ratings) {
          totalRatings += JSON.parse(ratings[rate]);
        }
        let ratingObj = {};
        for (let rate in ratings) {
          ratingObj[rate] = (ratings[rate] / totalRatings) * 100;
        }
        setRating(ratingObj);
        // console.log('this is rating obj', ratingObj)

        //characteristics info
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
        setChar(charArr);
      })
  }, []);


  return (
    <div data-testid="rating-main">
      <h2>Ratings And Reviews</h2>
      <div>
      <RatingBreakdown productRating={productRating}/>
      <ProductBreakdown productChar={productChar}/>
      <ReviewsList product_id={product_id}/>
      </div>
    </div>
  )
}

export default RateAndReview;