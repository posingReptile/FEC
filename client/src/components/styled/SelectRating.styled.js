import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


export const Container = styled.div`
  display: flex;

  margin-bottom: 15px;
  flex-direction: column;

  & > form > label {
    padding: 20px;
  }

  `

export const HorizontalList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 50%
`


export const StyledStarLabel = styled.label`
  display: block;
  position: relative;
  margin: 10px 0;
  user-select: none;
`
export const ReviewRating = styled.input.attrs(() => ({
  type: "radio"
}))`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`
export const StyledStar = styled(FaStar).attrs(() => ({
  icon: "star"
}))`
  position: absolute;
  top: 0;
  left: 0;

  color: ${props =>
    props.checked
      ? "orange"
      : props.hovered
      ? "rgba(255, 165, 0, 0.5)"
      : "#eee"};
`
