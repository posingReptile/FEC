import React, {useState, useEffect} from 'react';


const CarouselThumbnail = ({photos, mainPhoto, setMainPhoto}) => {
  let [index, setIndex] = useState(0);

  let lastPhoto;
  let lastPhotoInCarousel = 0;

  let thumbnail = () => {
    lastPhoto = photos[photos.length - 1];
    let array = [];
    for (let i = index; i < index + 5; i++) {
      if (photos[i]) {
        array.push(photos[i]);
      };
    };
    lastPhotoInCarousel = array[array.length - 1];
    return array;
  }
  // console.log('this is from', photos);
  return (
    <div className="horizontalCarousel" >
      {index === 0 ? null : <button className='topThumbnailButton' type="button" onClick={() => { setIndex(index - 1); }}>▲</button>}
      <div id="carouselThumbnail">
        {thumbnail().map(({thumbnail_url, url}, index) => (
          <div key={index}>
            {url !== mainPhoto ?
              <img className="column" src={thumbnail_url} onClick={e => setMainPhoto(url)}></img> :
              <img className="column" style={{border: '2px yellow solid'}} src={thumbnail_url} onClick={e => setMainPhoto(url)}></img>}
          </div>
        ))}
      </div>
      {lastPhoto === lastPhotoInCarousel ? null : <button className='botThumbnailButton' type="button" onClick={() => { setIndex(index + 1); }}>▼</button>}
    </div>
  )
}

export default CarouselThumbnail;