import React from 'react';

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
          <fieldset>
            <legend>{obj.name}</legend>
            {arr.map((_, index) => (

                <label key={index}>
                  <input type="radio"
                      // value={}
                      name={charOptions[obj.name][index]}
                      onChange={(e) => handleCharClick(e, obj.id, index + 1)}
                      checked={charChoice[`${obj.id}`].checked === (index + 1)}/>
                    {charOptions[obj.name][index]}</label>
             ))}
            <br/>
        </fieldset></div>
      )})}
    </div>
  )
}

export default CharReview

{/* <input type="radio"
  name={charOptions[obj.name][0]}
  onChange={(e) => handleCharClick(e, obj.id, 1)}
  checked={charChoice[`${obj.id}`].checked === 1}/>
  <label>{charOptions[obj.name][0]}</label>

<input type="radio"
  name={charOptions[obj.name][1]}
  onChange={(e) => handleCharClick(e, obj.id, 2)}
  checked={charChoice[`${obj.id}`].checked === 2}/>
  <label>{charOptions[obj.name][1]}</label>


<input type="radio"
  name={charOptions[obj.name][2]}
  onChange={(e) => handleCharClick(e, obj.id, 3)}
  checked={charChoice[`${obj.id}`].checked === 3}/>
  <label>{charOptions[obj.name][2]}</label>


<input type="radio"
  name={charOptions[obj.name][3]}
  onChange={(e) => handleCharClick(e, obj.id, 4)}
  checked={charChoice[`${obj.id}`].checked === 4}/>
  <label>{charOptions[obj.name][3]}</label>


<input type="radio"
  name={charOptions[obj.name][4]}
  onChange={(e) => handleCharClick(e, obj.id, 5)}
  checked={charChoice[`${obj.id}`].checked === 5}/>
  <label>{charOptions[obj.name][4]}</label> */}