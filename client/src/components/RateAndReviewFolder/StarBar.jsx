import React from 'react'
import { StyledParentStarBar, StyledChildStarBar, HoverAndFilter } from '../styled/StarRating.styled.js';

const StarBar = ({ starValue, starRating, setFilter }) => {
  const handleStarClick = () => {
    // console.log('this is starValue: ', starValue)
    setFilter(prev => ([
      ...prev,
      starValue
    ]))
  }

  return (
    <HoverAndFilter onClick={() => handleStarClick()}>
      <h5> <u>{starValue} stars</u></h5>
        <StyledParentStarBar >
          <StyledChildStarBar starRating={starRating}>
          </StyledChildStarBar>
        </StyledParentStarBar>
    </HoverAndFilter>
  )
}

export default StarBar;