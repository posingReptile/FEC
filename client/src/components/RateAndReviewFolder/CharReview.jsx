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
  console.log('this is charChoice:', charChoice)

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

            <input type="radio"
              name={charOptions[obj.name][0]}
              onChange={(e) => handleCharClick(e, obj.id, 1)}
              checked={charChoice[`${obj.id}`].checked === 1}/>

            <input type="radio"
              name={charOptions[obj.name][1]}
              onChange={(e) => handleCharClick(e, obj.id, 2)}
              checked={charChoice[`${obj.id}`].checked === 2}/>

            <input type="radio"
              name={charOptions[obj.name][2]}
              onChange={(e) => handleCharClick(e, obj.id, 3)}
              checked={charChoice[`${obj.id}`].checked === 3}/>

            <input type="radio"
              name={charOptions[obj.name][3]}
              onChange={(e) => handleCharClick(e, obj.id, 4)}
              checked={charChoice[`${obj.id}`].checked === 4}/>

            <input type="radio"
              name={charOptions[obj.name][4]}
              onChange={(e) => handleCharClick(e, obj.id, 5)}
              checked={charChoice[`${obj.id}`].checked === 5}/>

            <br/>
        </fieldset></div>
      )})}
    </div>
  )
}

export default CharReview

// {stars.map((_, index) => {
//   let ratingVal = index + 1;
//   // let stringy = JSON.stringify(obj.id);
//   return (
//   <label key={index}>
//     {ratingVal}
//     <input type="radio"
//       value={ratingVal}
//       name={charOptions[obj.name][index]}
//       onChange={(e) => handleCharClick(e, obj.id)}/>

//   </label>

// )})
// }