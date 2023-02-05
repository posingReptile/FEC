import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';
import Modal from 'react-modal';
import './RateAndReview.css';


const ReviewsList = ({ setSortBy, totalNumReviews, reviewsShown, showMoreReviews, markHelpful, reportReview, charArray, charChoice, setCharChoice, product_id, charOptions }) => {
  const [modalIsOpen, setModal] = useState(false);

  Modal.setAppElement('#root')

  let openModal = () => {
    setModal(true);
  }

  let closeModal = () => {
    setModal(false);
  }

  return (
    <div id="review-list" data-testid='review-list'>
    <div>
    <SortOptions setSortBy={setSortBy} totalNumReviews={totalNumReviews}/>
    {reviewsShown.map((review) =>  (
        <div key={review['review_id']}>
          <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview}/>
        </div>
      ))}
    </div>
    <button onClick={() => showMoreReviews()}>More Reviews</button>

    <button onClick={openModal}>Add New Review</button>
    <Modal  isOpen={modalIsOpen} onRequestClose={closeModal}>
      <NewReview charArray={charArray}
        charChoice={charChoice}
        setCharChoice={setCharChoice}
        product_id={product_id}
        charOptions={charOptions}/>
      <button onClick={closeModal} style={{"display": "flex"}}>close</button>
    </Modal>
    </div>
  )
};

export default ReviewsList;