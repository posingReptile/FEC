import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RateAndReview = ({ product_id }) => {
  const [productReviews, setReviews] = useState([]);
  const [reviewsShown, setShownReviews] = useState([]);
  const [ratingOverall, setOverall] = useState(0);
  const [productRatings, setRating] = useState({});
  const [recommendPercentage, setPercentage] = useState(0);
  const [productChar, setChar] = useState([])
  const [charWords, setCharWords] = useState({});
  const [charArray, setCharArr] = useState([]);
  const [charChoice, setCharChoice] = useState({});
  const [reviewCount, setReviewCount] = useState(2);
  const [totalNumReviews, setTotalNumReviews] = useState(0);
  const [sortBy, setSortBy] = useState('relevant');

  useEffect(() => {
    getReviewsHelper()

    axios.get(`getReviewsMeta/?product_id=${product_id}`)
    .then(data => {
      let meta = data.data
      // console.log(meta);

      //overall Rating
      let avgRating = calculateAvg(meta.ratings);
      setOverall(avgRating);

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

      //recommended percentage
      let totalTrue = JSON.parse(meta.recommended.true);
      let totalFalse = JSON.parse(meta.recommended.false);
      let total = totalTrue + totalFalse;
      let percent = Number.parseInt((totalTrue / total) * 100);
      setPercentage(percent);

      //characteristics info for rating breakdown
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

      // characteristics word selection
      let words = {}
      charArr.forEach(char => {
        let wordArr = [];
        wordArr.push(charOptions[char.name][0])
        wordArr.push(charOptions[char.name][2])
        wordArr.push(charOptions[char.name][4])
        words[char.name] = wordArr;
      });
      setCharWords(words)


      // characteristics options for new review
      let characteristicsOptions = charArr.map(char => {
        const { name, id } = char;
        const object = { rating: '', name, id};
        return object;
      });
      setCharArr(characteristicsOptions);

      charArr.forEach(obj => {
        const { name, id } = obj;
        setCharChoice((prev) => ({
        ...prev,
        [id]: ({name, rating: '', checked: 0})
      }))
      })


    });
  }, []);

  useEffect(() => {
    setShownReviews(productReviews.slice(0, reviewCount))
  },[reviewCount])

  useEffect(() => {
    getReviewsHelper()
  }, [sortBy]);

  let getReviewsHelper = () => {
    return axios.get(`getReviews/?product_id=${product_id}&sort=${sortBy}`)
    .then(data => {
      setReviews(data.data.results);
      setShownReviews(data.data.results.slice(0, reviewCount))
      setTotalNumReviews(data.data.results.length);
    });
  }

  const markHelpful = (reviewId) => {
    axios.put(`markReviewHelpful/?review_id=${reviewId}`)
      .then(() => console.log('marked!'))
      .catch(err => console.log(err));
  }

  const showMoreReviews = () => {
    return setReviewCount(reviewCount + 2);
  }

  const calculateAvg = (ratingObject) => {
    let ratingArr = [];
    for (let key in ratingObject) {
      let keyNum = Number.parseInt(key);
      let valueNum = Number.parseInt(ratingObject[key]);
      let numArr = Array(valueNum).fill(keyNum);
      ratingArr = ratingArr.concat(numArr);
    }

    let total = 0;
    ratingArr.forEach(num => {
      total += num;
    });

    let avg = total / (ratingArr.length);
    avg = Number.parseInt(avg * 10) / 10;
    return avg;
  }

  const charOptions = {
    Size: ['A size too small', 'A 1/2 size too small', 'Perfect', 'A 1/2 size too big','A size too big'],
    Width: ['Too narrow', 'slightly narrow', 'Perfect   ', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortale', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect    '],
    Length: ['Runs short', 'Runs slightly short', 'Perfect  ', 'Runs slightly long', 'Runs Long'],
    Fit: ['Runs tight', 'Runs slightly tight', ' Perfect ', 'Runs slighty loose', 'Runs loose']
  }


  return (
    <div data-testid="rating-main">
      <h2>Ratings And Reviews</h2>
      <div>
      <RatingBreakdown ratingOverall={ratingOverall}
        productRatings={productRatings}
        recommendPercentage={recommendPercentage}/>
      <ProductBreakdown productChar={productChar} charWords={charWords}/>
      <ReviewsList setSortBy={setSortBy}
        totalNumReviews={totalNumReviews}
        reviewsShown={reviewsShown}
        showMoreReviews={showMoreReviews}
        markHelpful={markHelpful}
        charArray={charArray}
        charChoice={charChoice}
        setCharChoice={setCharChoice}
        product_id={product_id}
        charOptions={charOptions}/>
      </div>
    </div>
  )
}

export default RateAndReview;