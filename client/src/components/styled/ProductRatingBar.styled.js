import styled from 'styled-components';

export const StyledProductBar = styled.div`
  display: flex;
  height: ${({height}) => height}px;
  width: 80%;
  background-color: lightgray;
  margin-bottom: 5px;
`
export const StyledProductRating = styled.div`
  display: flex;
  height: 100%;
  width: ${({productRating}) => productRating}%;

  justify-content: flex-end;
`
export const StyledRatingCarrot = styled.span`
  height: 100%
`

export const StyledWordList = styled.ul`
  display: flex;
  width: 20%
  flex-direction: row;
  list-style-type: none;
  justify-content: space-between

`
export const StyledWordItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 20%;
`
