import React, {useState, useEffect} from 'react';


const CarouselThumbnail = ({photos, mainPhoto, setMainPhoto}) => {
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);

  if (document.getElementById('horizontalCarousel')) {
    let scrollDiv = document.getElementById('horizontalCarousel');
    var scrollFunc = () => {
      var totalHeight = scrollDiv.scrollHeight - scrollDiv.offsetHeight;
      var currentHeight = scrollDiv.scrollTop;
      if (currentHeight < totalHeight) {
        setFirst(false);
        setLast(false);
      }
      if (currentHeight === 0) {
        setFirst(true);
      }
      if (Math.ceil(currentHeight) === totalHeight) {
        setLast(true);
      }
    }
    var scroll = (number) => {
      var currentHeight = scrollDiv.scrollTop;
      scrollDiv.scrollBy({
        top: number,
        behavior: 'smooth'
      })
    }
    scrollDiv.addEventListener('scroll', scrollFunc);
  }

  return (
      <div>
          <div id="horizontalCarousel">
            {photos.map(({thumbnail_url, url}, index) => (
              <div key={index}>
                {url !== mainPhoto[index].url ?
                  <img className="column" src={thumbnail_url} onClick={e => setMainPhoto(url)}></img> :
                  <img className="column" style={{border: '2px yellow solid'}} src={thumbnail_url} onClick={e => setMainPhoto(url)}></img>}
              </div>
            ))}
          </div>
           {first ? null : <button id='topScroll' type="button" onClick={() => {scroll(-85)}}>▲</button>}
           {last ? null : <button id='botScroll' type="button" onClick={() => {scroll(85)}}>▼</button>}
           {last ? null : <button id='leftScroll' type="button" onClick={() => { setIndex(index - 1); }}>«</button>}
           {last ? null : <button id='rightScroll' type="button" onClick={() => { setIndex(index + 1); }}>»</button>}
      </div>
  )
}

export default CarouselThumbnail;