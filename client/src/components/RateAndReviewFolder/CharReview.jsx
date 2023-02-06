import React from 'react';
import { CharRadioDiv, StyledFieldset } from '../styled/NewReview.styled.js';

const CharReview = ({charArray, charChoice, setCharChoice, charOptions}) => {

  const arr = Array(5).fill(0);

  const handleCharClick = (e, ratingId, value) => {
    setCharChoice(prev => ({
      ...prev,
      [ratingId]: ({ ...prev[ratingId],  rating: value, checked: value })
   }));
  }

  return (
    <div>
      {charArray.map(obj => {
        return (
        <div key={obj.id}>
          <StyledFieldset>
            <legend>{obj.name}</legend>
            <CharRadioDiv>
            {arr.map((_, index) => (

                <label key={index}>

                    <input type="radio"
                        // value={}
                        name={charOptions[obj.name][index]}
                        onChange={(e) => handleCharClick(e, obj.id, index + 1)}
                        checked={charChoice[`${obj.id}`].checked === (index + 1)}/><br/>
                      {charOptions[obj.name][index]}

                </label>
             ))}
             </CharRadioDiv>
        </StyledFieldset></div>
      )})}
    </div>
  )
}

export default CharReview
