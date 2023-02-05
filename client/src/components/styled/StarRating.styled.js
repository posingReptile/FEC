import styled from 'styled-components';

//will take prop (ratingPercent) that has rating out of 5 or percentage
//will take prop for font-size

export const StyledStarRating = styled.h5`
  display: inline-block;
  font-size: ${({fontSize}) => fontSize || '20'}px;
  font-family: Times;
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 1px;
    background: linear-gradient(90deg, #daa520 ${({ratingPercent}) => ratingPercent || '70'}%, lightgray ${({ratingPercent}) => ratingPercent || '70'}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
// slate gray : #2f4f4f

export const StyledRecommendPercentage = styled.p`
  font-size: 12px;
  color: rgba(39, 50, 39, 0.7);
`

export const StyledHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;

  & > h5 {
    padding-right: 5px;
    font-size: 20px;
  }
`

export const StyledRatingDiv = styled.div`
  display: flex;
  flex-direction: column;


`
export const HoverAndFilter = styled.div`
  &:hover {
    color: darkgreen;
  }
`

export const StyledParentStarBar = styled.div`
  height: 15px;
  width: 80%;
  background-color: lightgray;
`

export const StyledChildStarBar = styled.div`
  height: 100%;
  width: ${({starRating}) => starRating}%;
  background-color: green;
  text-align: right;
`