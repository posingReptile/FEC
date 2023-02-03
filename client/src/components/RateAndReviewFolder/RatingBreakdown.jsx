import React from 'react';
import StarBar from './StarBar.jsx'
import { StyledStarRating } from '../styled/StarRating.styled.js';

const RatingBreakdown = ({ productRating, productRatings, recommendPercentage}) => {
  // console.log('this is recommendPercentage', recommendPercentage);
  const ratingPercent = (productRating * 100) / 5;

  return (
    <div data-testid='rating-breakdown'>
      <h3>Rating Breakdown</h3>
      <div data-testid='rating-bd-sum'>
        <h5>Rating Summary</h5>
        <h5>{productRating} <StyledStarRating ratingPercent={ratingPercent}/></h5>

      </div>
      <div data-testid='rating-bd-rec'>
        <p>{recommendPercentage}% of reviewers recommend this product</p>
      </div>
      <div data-testid='rating-bd-stars'>
        <a>5 Stars</a> <StarBar starRating={productRatings['5']} height={15}/><br/>
        <a>4 Stars</a> <StarBar starRating={productRatings['4']} height={15}/> <br/>
        <a>3 Stars</a> <StarBar starRating={productRatings['3']} height={15}/> <br/>
        <a>2 Stars</a> <StarBar starRating={productRatings['2']} height={15}/> <br/>
        <a>1 Stars</a> <StarBar starRating={productRatings['1']} height={15}/> <br/>
      </div>
    </div>
  )
}

export default RatingBreakdown;