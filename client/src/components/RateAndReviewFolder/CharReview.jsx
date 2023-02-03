import React from 'react';

const CharReview = ({charArray, charChoice, setCharChoice}) => {
  const charOptions = {
    Size: ['A size too small', 'A 1/2 size too small', 'Perfect', 'A 1/2 size too big','A size too big'],
    Width: ['Too narrow', 'slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly Uncomfortable', 'Ok', 'Comfortale', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs Long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slighty loose', 'Runs loose']
  }
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
          <fieldset>
            <legend>{obj.name}</legend>
            {arr.map((_, index) => (
            <label key={index}>
              <input type="radio"
                   name={charOptions[obj.name][index]}
                   onChange={(e) => handleCharClick(e, obj.id, index + 1)}
                   checked={charChoice[`${obj.id}`].checked === (index + 1)} />
                 {charOptions[obj.name][index]}</label>
             ))}
            <br/>
        </fieldset></div>
      )})}
    </div>
  )
}

export default CharReview
