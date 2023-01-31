import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';

const ReviewsList = ({ productReviews }) => {
  const [reviewButton, setReviewState] = useState(false);

  return (
    <div data-testid='review-list'>
      <h3>Reviews List</h3>
    <div>
    <SortOptions />
    {productReviews.map((review) =>  (
        <div key={review['review_id']}>
          <ReviewTile review={review}/>
        </div>
      ))}
    </div>

    <button onClick={()=> setReviewState(!reviewButton)}>Add New Review</button>
      <>{reviewButton ? <NewReview /> : null}</>
    </div>
  )
};

export default ReviewsList;