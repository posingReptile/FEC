import React from 'react';


const CarouselThumbnail = (props) => {
  //«
  //
  return (
    <div className="carouselThumbnail" >
      <button type="button">▲</button>
      {[1, 2, 3, 4, 5].map((number) => (
        <div>
           <img className="column" key={number} src="https://via.placeholder.com/50x50" alt="placeHolder"></img>
        </div>
      ))}
      <button type="button">▼</button>
    </div>
  )
}

export default CarouselThumbnail;