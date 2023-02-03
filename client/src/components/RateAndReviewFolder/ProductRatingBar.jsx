import React from 'react';
import { StyledProductBar, StyledProductRating, StyledRatingCarrot } from '../styled/ProductRatingBar.styled.js';
import { GoTriangleDown } from 'react-icons/go'

//needs work... this is only placing triangle at begining of bar

const ProductRatingBar = ({ height, name, productRating }) => {

  return (
    <>
    <h5>{name}</h5>
    <StyledProductBar height={height}>
      <StyledProductRating productRating={productRating}>
        <StyledRatingCarrot>
          <GoTriangleDown />
          {/* {'▼'} */}
          </StyledRatingCarrot>
      </StyledProductRating>
    </StyledProductBar></>
  )

}


export default ProductRatingBar;