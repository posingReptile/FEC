import React, {useState, useEffect} from 'react';


const CarouselThumbnail = ({photos, mainPhoto, setMainPhoto, zoom}) => {
  let [index, setIndex] = useState(0);
  let [vis, setVis] = useState(false);

  let lastPhoto;
  let lastPhotoInCarousel = 0;

  let thumbnail = () => {
    lastPhoto = photos[photos.length - 1];
    let array = [];
    for (let i = index; i < index + 7; i++) {
      if (photos[i]) {
        array.push(photos[i]);
      };
    };
    lastPhotoInCarousel = array[array.length - 1];
    return array;
  }
  // if (document.getElementById('horizontalCarousel')) {
  //   let scrollDiv = document.getElementById('horizontalCarousel');
  //   let scrollFunc = () => {
  //     // var maxScrollPosition = scrollDiv.scrollHeight - scrollDiv.clientHeight;
  //     console.log(scrollDiv.scrollHeight, scrollDiv.scrollTop, scroll.scrollLeft);
  //   }
  //   scrollDiv.addEventListener('scroll', scrollFunc);
  // }

  return (
      <div>
            <div id="horizontalCarousel" >
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
           {index === 0 ? null : <button id='leftScroll' type="button" onClick={() => { setIndex(index - 1); }}>«</button>}
           {lastPhoto === lastPhotoInCarousel ? null : <button id='rightScroll' type="button" onClick={() => { setIndex(index + 1); }}>»</button>}
      </div>
  )
}

export default CarouselThumbnail;