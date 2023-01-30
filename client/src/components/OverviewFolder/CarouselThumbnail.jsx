import React, {useState, useEffect} from 'react';


const CarouselThumbnail = (props) => {

  let [index, setIndex] = useState(0);
  let [selectedPhoto, setSelectedPhoto] = useState(props.photos[0].thumbnail_url);

  let lastPhoto;
  let lastPhotoInCarousel = 0;

  let thumbnail = () => {
    lastPhoto = props.photos[props.photos.length - 1];
    let array = [];
    for (let i = index; i < index + 5; i++) {
      if (props.photos[i]) {
        array.push(props.photos[i]);
      };
    };
    lastPhotoInCarousel = array[array.length - 1];
    return array;
  };

  let imgSelector = function (src) {
    props.setMainPhoto(src);
    setSelectedPhoto(src);
  };

  return (
    <div className="horizontalCarousel" >
      {index === 0 ? null : <button className='topThumbnailButton' type="button" onClick={() => { setIndex(index - 1); }}>▲</button>}
      <div id="carouselThumbnail">
        {thumbnail().map(({thumbnail_url}, index) => (
          <div key={index}>
            {thumbnail_url !== selectedPhoto ?
              <img className="column" src={thumbnail_url} onClick={(e) => { imgSelector(e.target.src); }}></img> :
              <img className="column" style={{border: '2px yellow solid'}} src={thumbnail_url} onClick={(e) => { imgSelector(e.target.src); }}></img>}
          </div>
        ))}
      </div>
      {lastPhoto === lastPhotoInCarousel ? null : <button className='botThumbnailButton' type="button" onClick={() => { setIndex(index + 1); }}>▼</button>}
    </div>
  )
}

export default CarouselThumbnail;