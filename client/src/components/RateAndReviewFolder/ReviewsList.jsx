import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';
import Modal from 'react-modal';


const ReviewsList = ({ reviewsShown, showMoreReviews, markHelpful }) => {
  // const [reviewButton, setReviewState] = useState(false);
  const [modalIsOpen, setModal] = useState(false);

  let openModal = () => {
    setModal(true);
  }

  let closeModal = () => {
    setModal(false);
  }


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

    <button onClick={openModal}>Add New Review</button>
    <Modal  isOpen={modalIsOpen} onRequestClose={closeModal}>
      <NewReview />
      <button onClick={closeModal} style={{"display": "flex"}}>close</button>
    </Modal>
    </div>
  )
};

export default ReviewsList;