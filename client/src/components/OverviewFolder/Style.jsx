import React, {useState} from 'react';


const Style = ({allStyleResult}) => {
  const [check, setCheck] = useState(0);
 let firstOfEveryStyle = {

 }
//  console.log('this is from style', allStyleResult);
let array = [];
 for (let i = 0; i < allStyleResult.length; i++) {
  array.push(allStyleResult[i].photos[0].thumbnail_url)
 }
//  console.log(array);

  return (
      <div className="styleIcons">
        {array.slice(0, 4).map((url, n) => (
          <div className="style" key={n}>
            {n === check ? <div className="check">&#10003;</div> : null}
            <img className="column" src={url} alt="placeHolder" onClick={() => { setCheck(n); }}></img>
          </div>
        ))}
      </div>
  );
};

export default Style;