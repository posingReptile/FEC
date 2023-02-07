import React, { useState } from 'react';

const ReviewTileBody = ({ bodyText }) => {
  const [showAllText, setShowAllText] = useState(false);

  let over250 = bodyText.length > 250;

  const showMoreHelper =  () => {
    setShowAllText(true);
  }


  return (
    <>
    { over250 ?
      !showAllText ? <><p>{bodyText.slice(0, 251)}</p><a onClick={showMoreHelper}><u>...ShowMore</u></a></>
        : <p>{bodyText}</p>
      :<p>{bodyText}</p>
    }
    </>
  )
}

export default ReviewTileBody