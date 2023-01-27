import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';

const RateAndReview = (props) => {
  return (
    <div data-testid="rating-main">
      <h2>Ratings And Reviews</h2>
      <RatingBreakdown />
      <ProductBreakdown />
      <ReviewsList />
    </div>
  )
}

export default RateAndReview;