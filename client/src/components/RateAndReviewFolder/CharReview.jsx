import React from 'react';
import { CharRadioDiv, StyledFieldset, SingleCharOption } from '../styled/NewReview.styled.js';

const CharReview = ({charArray, charChoice, setCharChoice, charOptions }) => {

  const arr = Array(5).fill(0);

  const handleCharClick = (e, ratingId, value) => {
    setCharChoice(prev => ({
      ...prev,
      [ratingId]: ({ ...prev[ratingId],  rating: value, checked: value })
   }));
  }

  return (
    <div >
      {charArray.map(obj => {
        return (
        <div key={obj.id} role="characteristics-rating">
          <StyledFieldset>
            <legend>{obj.name}</legend>
            <CharRadioDiv>
            {arr.map((_, index) => (

              <SingleCharOption key={index}>
                <label >

                    <input type="radio"
                        role={`char-${charOptions[obj.name][index]}`}
                        name={charOptions[obj.name][index]}
                        onChange={(e) => handleCharClick(e, obj.id, index + 1)}
                        checked={charChoice[`${obj.id}`].checked === (index + 1)}/><br/>
                      {charOptions[obj.name][index]}

                </label>
                </SingleCharOption>
             ))}
             </CharRadioDiv>
        </StyledFieldset></div>
      )})}
    </div>
  )
}

export default CharReview
