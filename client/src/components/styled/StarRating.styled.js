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
    background: linear-gradient(90deg, #fc0 ${({ratingPercent}) => ratingPercent || '70'}%, lightgray ${({ratingPercent}) => ratingPercent || '70'}%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`



// slate gray : #2f4f4f