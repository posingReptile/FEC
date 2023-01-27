import React from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';

const ReviewsList = (props) => {
  return (
    <div>
      <h3>Reviews List</h3>
      <SortOptions />
      <ReviewTile />
    </div>
  )
}

export default ReviewsList;