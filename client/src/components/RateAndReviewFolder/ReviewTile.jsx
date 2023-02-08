/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import ReviewTileBody from './ReviewTileBody.jsx';
import TimeAgo from 'react-timeago';
import { HorizontalImgListTile, StyledImgList } from '../styled/ReviewTile.styled.js';

const ReviewTile = ({ review, markHelpful, reportReview }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulness);
  const [helpClicked, setClicked] = useState(false);

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

  const clickHelper = () => {
    if (!helpClicked) {
      markHelpful(review.review_id);
      setHelpfulCount(() => helpfulCount + 1);
      setClicked(true);
    }
  }

  return (
    <div style={{border: '1px solid black'}} role="review-tile">
      <div className="Rating-And-Name">
        <h5>{starsMapper(review.rating)}</h5>
        <p>{review['reviewer_name']}</p>
        <TimeAgo date={review.date} locale="en-US"/>
      </div>
      <h5><strong>{review.summary}</strong></h5>
      <div>
        {review.recommend ? <p>{'✓ I recommend this product'}</p> : null}
      </div>
      <ReviewTileBody bodyText={review.body}/>

      <HorizontalImgListTile>
      {review.photos ? review.photos.map(photo => {
        return (
        <StyledImgList key={photo.id} style={{width: '10%', position: 'relative'}}>
          <img src={photo.url} alt="placeholder"/>
        </StyledImgList>
      )}) : null}
      </HorizontalImgListTile>
      <div>
        {review.response ? <p>review.response</p> : null }
      </div>
      <div>
        <span>Helpful? <a onClick={() => clickHelper() }role="click-helpful">Yes({helpfulCount})</a></span>
        <span><a onClick={()=> reportReview(review.review_id)}>Report</a></span>
      </div>
    </div>

  )
}

export default ReviewTile;