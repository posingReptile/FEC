/* eslint-disable no-undef */
import React, {useState} from 'react';
import ReviewTile from './ReviewTile.jsx';
import SortOptions from './SortOptions.jsx';
import NewReview from './NewReview.jsx';
import Modal from 'react-modal';
import './RateAndReview.css';


const ReviewsList = ({ setSortBy, totalNumReviews, reviewsShown, showMoreReviews, markHelpful, reportReview, charArray, charChoice, setCharChoice, product_id, charOptions, item }) => {
  const [modalIsOpen, setModal] = useState(false);


  if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
  }

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
      <div id="reviews-list">
        {reviewsShown.map((review) =>  (
            <div key={review['review_id']}>
              <ReviewTile review={review} markHelpful={markHelpful} reportReview={reportReview}/>
            </div>
          ))}
      </div>
      </div>

      <div className="review-btns">
      {reviewsShown.length === totalNumReviews ? null : <button id="btn-more-reviews" onClick={() => showMoreReviews()}>More Reviews</button>}

      <button id="btn-new-review" onClick={openModal} role='open-modal'>Add New Review</button>
        <Modal className="new-review" overlayClassName="overlay-new-review" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <button onClick={closeModal} id="new-review-close">X</button>
          <NewReview item={item}
            charArray={charArray}
            charChoice={charChoice}
            setCharChoice={setCharChoice}
            product_id={product_id}
            charOptions={charOptions}/>
        </Modal>
      </div>
    </div>
  )
};

export default ReviewsList;