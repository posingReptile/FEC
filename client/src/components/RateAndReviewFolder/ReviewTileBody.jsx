import React, { useState } from 'react';
import {StyledATag} from '../styled/ReviewTile.styled.js';
import './RateAndReview.css';

const ReviewTileBody = ({ bodyText }) => {
  const [showAllText, setShowAllText] = useState(false);

  let over250 = bodyText.length > 250;

  const showMoreHelper =  () => {
    setShowAllText(true);
  }


  return (
    <div data-testid="review-tile-body">
    { over250 ?
      !showAllText ? <><p>{bodyText.slice(0, 251)}</p><StyledATag onClick={showMoreHelper}><u>...Show More</u></StyledATag></>
        : <p>{bodyText}</p>
      :<p>{bodyText}</p>
    }
    </div>
  )
}

export default ReviewTileBody