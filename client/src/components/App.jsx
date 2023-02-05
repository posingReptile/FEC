import React, { useState }  from 'react';
// import axios from 'axios';

import NavBar from './NavBar.jsx';
import Overview from './OverviewFolder/Overview.jsx';
import QuestionAnswer from './QuestionAnswerFolder/QuestionAnswer.jsx';
import RateAndReview from './RateAndReviewFolder/RateAndReview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';


const App = () => {
  const [product_id, setProductId] = useState('37318');
  const [productRating, setProductRating] = useState(0);
  const [totalNumReviews, setTotalNumReviews] = useState(0);

  return (
    <div>
      <NavBar id="nav-bar"/>
      <Overview product_id={product_id} productRating={productRating} totalNumReviews={totalNumReviews}/>
      <RelatedProducts product_id={product_id} setProductId={setProductId}/>
      <QuestionAnswer product_id={product_id}/>
      <RateAndReview product_id={product_id}
        productRating={productRating}
        setProductRating={setProductRating}
        totalNumReviews={totalNumReviews}
        setTotalNumReviews={setTotalNumReviews}/>
    </div>
  );
}


export default App