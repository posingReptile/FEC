import React, {useState} from 'react';


const Style = ({photos}) => {
  let [check, setCheck] = useState(1);
  // console.log(e.target.getAttribute('id')) (document.getElementById(n).id) setCheck(e.target.getAttribute('id'))
  let test = function (n) {
    console.log(n);
    setCheck(n);
  }
  return (
    <div className="styleIcons">
      {[1, 2, 3, 4].map((n) => (
        <div className="style" key={n}>
           {n === check ? <div className="check">&#10003;</div> : null}
           <img className="column" src="https://via.placeholder.com/50x50" alt="placeHolder" onClick={(e) => {test(n)}}></img>
        </div>
      ))}
    </div>

  )
}

export default Style;