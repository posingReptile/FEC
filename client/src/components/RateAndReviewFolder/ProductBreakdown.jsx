import React from 'react';
import ProductRatingBar from './ProductRatingBar.jsx';
/* characteristics will be passed down based on product
 not all products will have all characteristics
 characteristics example from meta/?product_id=37311
    "characteristics": {
        "Fit": {
            "id": 125031,
            "value": "3.0751708428246014"
        },
        "Length": {
            "id": 125032,
            "value": "3.1202672605790646"
        },
        "Comfort": {
            "id": 125033,
            "value": "3.1957547169811321"
        },
        "Quality": {
            "id": 125034,
            "value": "3.2265060240963855"
        }
    }
*/
const ProductBreakdown = (props) => {

  return (
    <div data-testid='rating-product'>
      <h4>Product Breakdown</h4>
      <div data-testid='product-bars'>
        <ProductRatingBar productRating={70} height={15}/>

      </div>
    </div>
  )
}

export default ProductBreakdown;