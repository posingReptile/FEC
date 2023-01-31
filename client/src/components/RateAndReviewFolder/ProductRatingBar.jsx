import React from 'react';
// import { GoTriangleDown } from 'react-icons/go'

//needs work... this is only placing triangle at begining of bar

const ProductRatingBar = ({ height, name, productRating }) => {
  const productBar = {
    height: height,
    width: '20%',
    backgroundColor: 'lightgray',
    marginBottom: '5px'
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
  // console.log('this is productRating in rating bar:', productRating);


  return (
    <>
    <h5>{name}</h5>
    <div style={productBar}>
      <div style={productCarrot}>
        <span>{'▼'}</span>
      </div>
    </div></>
  )

}


export default ProductRatingBar;