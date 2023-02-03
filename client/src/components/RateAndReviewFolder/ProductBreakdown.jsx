import React from 'react';
import ProductRatingBar from './ProductRatingBar.jsx';
// import { StyledWordList, StyledWordItem, StyledProductBreakdown } from '../styled/ProductRatingBar.styled.js';

const ProductBreakdown = ({ productChar, charWords}) => {

  // console.log('this is productChar', productChar);
  // console.log('this is charWords', charWords);
  // var three = []

  return (
    <div data-testid='rating-product'>
      <h4>Product Breakdown</h4>
        {productChar.map((char) => (
          <div key={char.id} data-testid='product-bars'>
            <ProductRatingBar name={char.name} productRating={char.percent} height={15}/>
          {/* <StyledWordList>
            {charWords[char.name].map((word, i) => (
              <StyledWordItem key={i}>{word}</StyledWordItem>
            ))}
          </StyledWordList> */}
          </div>
        ))}
    </div>
  )
}

export default ProductBreakdown;