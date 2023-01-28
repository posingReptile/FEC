import React from 'react';
import { GoTriangleDown } from 'react-icons/go'

//needs work... this is only placing triangle at begining of bar

const ProductRatingBar = ({ height, productRating }) => {
  const productBar = {
    height: height,
    width: '20%',
    backgroundColor: 'lightgray',
  }
  const productCarrot = {
    height: '100%',
    width: `${productRating}%`,
    textAlign: 'right',
  }
  const trianglePos = {
    position: 'relative',
    right: 0
    // paddingLeft: `${productRating}%`
  }


  return (
    <div style={productBar}>
      <div style={productCarrot}>
        <span><GoTriangleDown style={trianglePos}/></span>
      </div>
    </div>
  )

}


export default ProductRatingBar;