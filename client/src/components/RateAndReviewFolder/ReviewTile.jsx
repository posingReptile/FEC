/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Modal from 'react-modal';
import ReviewTileBody from './ReviewTileBody.jsx';
import { HorizontalImgListTile, StyledImgList } from '../styled/ReviewTile.styled.js';
import { AiOutlineClose } from "react-icons/ai";
import './RateAndReview.css';

const ReviewTile = ({ review, markHelpful, reportReview }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness);
  const [helpClicked, setClicked] = useState(false);
  const [modalIsOpen, setModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');

  if (process.env.NODE_ENV !== 'test') {
    Modal.setAppElement('#root');
  }

  let starsMapper = (rating) => {
    let starFilled = '★';
    let starEmpty = '☆';
    let result = '';
    let index = 0
    while (index < rating) {
      result += starFilled;
      index++;
    }
    for (let i = 0; i < (5 - rating); i++) {
      result += starEmpty;
    }
    return result;
  }

  let date = new Date(review.date);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  date = date.toLocaleDateString('en-US', dateOptions);

  const clickHelper = () => {
    if (!helpClicked) {
      markHelpful(review.review_id);
      setHelpfulCount(() => helpfulCount + 1);
      setClicked(true);
    }
  }

  let openModal = (photo) => {
    setCurrentPhoto(photo.url);
    setModal(true);
  }

  let closeModal = () => {
    setCurrentPhoto('');
    setModal(false);
  }

  return (
    <div className="reviewTileContainer" role="review-tile">
      <div className="notHelpfulDiv">
        <div className="Rating-And-Name">
          <h5>{starsMapper(review.rating)}</h5>
          <span className="Name-And-Date">
            <p className="reviewName">{review['reviewer_name']},</p>
            <p className="reviewDate">{date}</p>
          </span>

        </div>
        <h5 className="reviewSum"><strong>{review.summary}</strong></h5>
        <div>
          {review.recommend ? <p  className="recommended">{'✓ I recommend this product'}</p> : null}
        </div>
        <ReviewTileBody bodyText={review.body}/>

        <HorizontalImgListTile>
        {review.photos ? review.photos.map(photo => {
          return (
          <StyledImgList key={photo.id} onClick={() => openModal(photo)}>
            <img src={photo.url} alt="placeholder"/>
          </StyledImgList>
        )}) : null}
        </HorizontalImgListTile>
        <div>
          {review.response ? <p>review.response</p> : null }
        </div>
      </div>
      <div className="HelpfulOrReport">
        <span>Helpful? <a onClick={() => clickHelper() }role="click-helpful">Yes<i className={'helpful' + helpClicked}>({helpfulCount})</i> |</a></span>
        <span><a onClick={()=> reportReview(review.review_id)} role="click-report">&nbsp;Report</a></span>
      </div>
      <Modal className="expandedPhoto" overlayClassName="overlayExpandedPhoto" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="singlePhotoContainer">
            <img className="singlePhoto" src={currentPhoto} alt="placeholder"/>
          <div className="closeButtonContainer" onClick={closeModal}>
            <AiOutlineClose className="close"/>
          </div>
          </div>
      </Modal>
    </div>

  )
}

export default ReviewTile;