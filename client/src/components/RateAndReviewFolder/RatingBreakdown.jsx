import React from 'react';
import StarBar from './StarBar.jsx'
import { StyledStarRating, StyledHeadingDiv, StyledRatingDiv, StyledRecommendPercentage } from '../styled/StarRating.styled.js';

const RatingBreakdown = ({ productRating, productRatings, recommendPercentage, filter, setFilter}) => {
  let ratingPercent = (productRating * 100) / 5;
  ratingPercent = (ratingPercent % 5) >= 2.5 ? parseInt(ratingPercent / 5) * 5 + 5 : parseInt(ratingPercent / 5) * 5
  // const handleStarClick = (e) => {
  //   console.log('this is e.target.value: ', e.target)
  //   // setFilter(prev => ([
  //   //   ...prev,
  //   //   e.target.value
  //   // ]))
  // }


  return (
    <div data-testid='rating-breakdown'>
      <StyledHeadingDiv data-testid='rating-bd-sum'>
        <h5>{productRating} </h5>
        <StyledStarRating ratingPercent={ratingPercent} data-testid='rating-star-visual'/>
      </StyledHeadingDiv>

      <div data-testid='rating-bd-rec'>
        <StyledRecommendPercentage>{recommendPercentage}% of reviewers recommend this product</StyledRecommendPercentage>
      </div>

      {filter.length > 0 ? <button onClick={() => setFilter([])}>clear all filters</button> : null}
      <StyledRatingDiv data-testid='rating-bd-stars'>
        <StarBar starValue={5} starRating={productRatings['5']} setFilter={setFilter} data-testid="star-filter"/>
        <StarBar starValue={4} starRating={productRatings['4']} setFilter={setFilter} data-testid="star-filter"/>
        <StarBar starValue={3} starRating={productRatings['3']} setFilter={setFilter} data-testid="star-filter"/>
        <StarBar starValue={2} starRating={productRatings['2']} setFilter={setFilter} data-testid="star-filter"/>
        <StarBar starValue={1} starRating={productRatings['1']} setFilter={setFilter} data-testid="star-filter"/>
      </StyledRatingDiv>
    </div>
  )
}

export default RatingBreakdown;