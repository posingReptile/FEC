import React, {useEffect, useState} from 'react';
import ProductRatingBar from './ProductRatingBar.jsx';

const ProductBreakdown = ({ productChar }) => {

  return (
    <div data-testid='rating-product'>
      <h4>Product Breakdown</h4>
        {productChar.map((char) => (
          <div key={char.id} data-testid='product-bars'>
            <ProductRatingBar name={char.name} productRating={char.percent} height={15}/>
            </div>
        ))}
    </div>
  )
}

export default ProductBreakdown;