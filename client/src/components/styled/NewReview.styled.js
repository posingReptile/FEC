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

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const HorizontalStarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-right: 5px;
`

export const StyledStarLabel = styled.label`
  display: block;
  position: relative;
  margin: 10px 0;
  user-select: none;
`
export const HorizontalImgList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  width: 100%;
  justify-content: space-around;
`
export const StyledImgList = styled.li`
  display: flex;
  flex-direction: row;
  width: 20%;
`
export const StyledReviewSummary = styled.textarea`
  width: 100%;
`

export const StyledReviewBody = styled.textarea`
  width: 100%;
  min-height: 100px;
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
export const VerticalList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%
  justify-content: flex-start
`

export const RedAsterisk = styled.i`
  color: red;
  font-size: 12px;
`
export const NewReviewTopPortion = styled.div`
  display: flex;
  justify-content: center;
`

export const LeftAndRight = styled.div`
  position: relative;
  width: 100%;
  justify
`
export const RadioDiv = styled.div`
  display: flex;
  width: 50%;
  flex-direction: row;
  justify-content: space-evenly;
`
export const CharRadioDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`
export const SingleCharOption = styled.div`
  width: 20%;
`

export const StyledFieldset = styled.fieldset`
  max-height: 15%
`

export const StyledEmailInput = styled.input`
  width: 70%;
`

export const StyledSubmit = styled.input`
  position: absolute;
  right: 20px;
  margin-top: 5px;
  background-color: bisque;
  border-radius: 4px;
  cursor: pointer;
`