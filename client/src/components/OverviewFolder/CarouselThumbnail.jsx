import React, {useState} from 'react';


const CarouselThumbnail = (props) => {

  let [index, setIndex] = useState(0);

  let lastPhoto;
  let lastPhotoInCarousel = 0;

  let thumbnail = () => {
    lastPhoto = props.photos[props.photos.length - 1];
    let array = [];
    for (let i = index; i < index + 5; i++) {
      if (props.photos[i]) {
        array.push(props.photos[i]);
      }
    }
    lastPhotoInCarousel = array[array.length - 1]
    return array;
  }

  return (
    <div className="horizontalCarousel" >
      {index === 0 ? null : <button className='topThumbnailButton' type="button" onClick={() => {setIndex(index - 1)}}>▲</button>}
      <div id="carouselThumbnail">
      {props.photos ? thumbnail().map(({thumbnail_url}, index) => (
        <div key={index}>
           <img className="column" src={thumbnail_url} alt="placeHolder"></img>
        </div>
      )) : null}
      </div>
     {lastPhoto === lastPhotoInCarousel ? null : <button className='botThumbnailButton' type="button" onClick={() => {setIndex(index + 1)}}>▼</button>}
    </div>
  )
}

export default CarouselThumbnail;