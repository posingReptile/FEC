import React, {useState} from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import ReactTimeAgo from 'react-time-ago';

const ReviewTile = ({ review }) => {
  TimeAgo.addDefaultLocale(en)


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

  return (
    <div style={{border: '1px solid black'}}>
      {/* <h4>Review Tile</h4> */}
      <div className="Rating-And-Name">
        <h5>{starsMapper(review.rating)}</h5>
        <p>{review['reviewer_name']}</p>
        <ReactTimeAgo date={review.date} locale="en-US"/>
      </div>
      <h5>{review.summary}</h5>
      <div>
        {review.recommend ? <p>{'✓ I recommend this product'}</p> : null}
      </div>
      <p>{review.body}</p>
      <div>
      {review.photos ? review.photos.map(photo => (
        <div key={photo.id} style={{width: '10%', position: 'relative'}}>
          <img src={photo.url} alt="placeholder"/>
        </div>
      )) : null}
      </div>
      <div>
        {review.response ? <p>review.response</p> : null }
      </div>
      <div>
        <span>Helpful? <a>Yes({review.helpfulness})</a></span>
      </div>
    </div>

  )
}

export default ReviewTile;