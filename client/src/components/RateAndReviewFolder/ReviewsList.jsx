import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';


const ReviewsList = ({ reviewsShown, showMoreReviews, markHelpful }) => {
  const [reviewButton, setReviewState] = useState(false);

  return (
    <div data-testid='review-list'>
      <h3>Reviews List</h3>
    <div>
    <SortOptions />
    {reviewsShown.map((review) =>  (
        <div key={review['review_id']}>
          <ReviewTile review={review} markHelpful={markHelpful}/>
        </div>
      ))}
    </div>
    <button onClick={() => showMoreReviews()}>More Reviews</button>

    <button onClick={()=> setReviewState(!reviewButton)}>Add New Review</button>
      <>{reviewButton ? <NewReview /> : null}</>
    </div>
  )
};

export default ReviewsList;