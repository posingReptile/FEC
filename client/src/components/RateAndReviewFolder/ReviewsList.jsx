import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';

const ReviewsList = (props) => {
  const [reviewButton, setReviewState] = useState(false);

  return (
    <div>
      <h3>Reviews List</h3>
      <SortOptions />
      <ReviewTile />
      <button onClick={()=> setReviewState(!reviewButton)}>Add New Review</button>
      <>
      {reviewButton ? <NewReview /> : null}
      </>
    </div>
  )
}

export default ReviewsList;