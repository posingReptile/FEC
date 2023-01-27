import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';

const ReviewsList = (props) => {
  return (
    <div>
      <h3>Reviews List</h3>
      <SortOptions />
      <ReviewTile />
      <NewReview />
    </div>
  )
}

export default ReviewsList;