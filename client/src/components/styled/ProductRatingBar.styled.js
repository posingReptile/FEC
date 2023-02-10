import styled from 'styled-components';

export const StyledProductBar = styled.div`
  display: flex;
  height: ${({height}) => height}px;
  width: 100%;
  background-color: lightgray;
  margin-bottom: 5px;
  @media (prefers-color-scheme: dark) {
    background-color: RGBA(36, 39, 37, 0.5);
  }
`
export const StyledProductRating = styled.div`
  display: flex;
  height: 100%;
  width: ${({productRating}) => productRating}%;
  z-index: 1;

  justify-content: flex-end;
`

// width: 20%
export const StyledWordList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`
export const StyledWordItem = styled.div`
  width: 33%;
  font-size: 10px;
  text-align: center;
`

export const StyledWhiteBar = styled.div`
  backgound-color: 5px;
`
export const StyledThird = styled.div`
  position: relative;
  width: 33%;
  border-right: 1px solid white;
  z-index: 1;
`