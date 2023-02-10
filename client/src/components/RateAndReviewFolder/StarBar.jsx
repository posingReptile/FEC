import React from 'react'
import { StyledParentStarBar, StyledChildStarBar, HoverAndFilter } from '../styled/StarRating.styled.js';
import './RateAndReview.css';

const StarBar = ({ starValue, starRating, setFilter }) => {
  const handleStarClick = () => {
    // console.log('this is starValue: ', starValue)
    setFilter(prev => ([
      ...prev,
      starValue
    ]))
  }

  return (
    <HoverAndFilter onClick={() => handleStarClick()} data-testid="star-filter" role={`${starValue}`}>
      <h5 className="stars-filter"> <u>{starValue} stars</u></h5>
        <StyledParentStarBar >
          <StyledChildStarBar starRating={starRating}>
          </StyledChildStarBar>
        </StyledParentStarBar>
    </HoverAndFilter>
  )
}

export default StarBar;