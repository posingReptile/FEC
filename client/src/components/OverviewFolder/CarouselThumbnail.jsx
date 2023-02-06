import React, {useState, useEffect} from 'react';


const CarouselThumbnail = ({photos, mainPhoto, setMainPhoto, photoIndex, setPhotoIndex}) => {
  const currentHeightDiv = document.getElementById('current');
  const scrollDiv = document.getElementById('horizontalCarousel');

  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);


  useEffect(() => {
    currentHeightDiv ? scrollFunc() : null
  }, [mainPhoto])

  var scrollFunc = () => {
    var totalHeight = scrollDiv.scrollHeight - scrollDiv.offsetHeight;
    var currentHeight = scrollDiv.scrollTop;
    // console.log('from func', currentHeightDiv.offsetHeight)
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
    if (currentHeightDiv.offsetHeight < 580 && last !== true) {
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

  if (document.getElementById('horizontalCarousel')) {
    scrollDiv.addEventListener('scroll', scrollFunc);
  }

  const outOfStock = "https://as2.ftcdn.net/v2/jpg/00/50/45/79/1000_F_50457976_7Zng8KAqYAHf9ZcOivdqg40oF5IHWIYU.jpg"

  return (
      <div>
          <div id="horizontalCarousel">
            <div id="current">
              {mainPhoto.map(({thumbnail_url, url}, index) => (
                <div key={index}>
                  {photoIndex !== index ?
                    <img className="column" src={thumbnail_url  || outOfStock} onClick={e => setPhotoIndex(index)}></img> :
                    <img className="column" style={{border: '2px #daa520 solid'}} src={thumbnail_url  || outOfStock} onClick={e => setPhotoIndex(index)}></img>}
                </div>
              ))}
            </div>
          </div>
           {first ? null : <button id='topScroll' type="button" onClick={() => {scroll(-85)}}>▲</button>}
           {last ? null : <button id='botScroll' type="button" onClick={() => {scroll(85)}}>▼</button>}
           {photoIndex === 0 ? null : <button id='leftScroll' type="button" onClick={() => { setPhotoIndex(photoIndex - 1); scroll(-82)}}>«</button>}
           {mainPhoto.length - 1 === photoIndex ? null : <button id='rightScroll' type="button" onClick={() => { setPhotoIndex(photoIndex + 1); scroll(82)}}>»</button>}
      </div>
  )
}

export default CarouselThumbnail;