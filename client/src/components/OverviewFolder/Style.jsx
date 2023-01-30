import React, {useState} from 'react';


const Style = ({photos}) => {
  const [check, setCheck] = useState(1);

  return (
      <div className="styleIcons">
        {[1, 2, 3, 4].map((n) => (
          <div className="style" key={n}>
            {n === check ? <div className="check">&#10003;</div> : null}
            <img className="column" src="https://via.placeholder.com/50x50" alt="placeHolder" onClick={(e) => { setCheck(n); }}></img>
          </div>
        ))}
      </div>
  );
};

export default Style;