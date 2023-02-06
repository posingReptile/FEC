import React, { useState }  from 'react';
// import axios from 'axios';

import NavBar from './NavBar.jsx';
import Overview from './OverviewFolder/Overview.jsx';
import QuestionAnswer from './QuestionAnswerFolder/QuestionAnswer.jsx';
import RateAndReview from './RateAndReviewFolder/RateAndReview.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';


const App = () => {
  const [product_id, setProductId] = useState('37311');
  const [productRating, setProductRating] = useState(0);
  const [totalNumReviews, setTotalNumReviews] = useState(0);
  const [item, setItem] = useState({id: 37311, name: "", slogan: "", description: "", category: "", default_price: ""});
  const [cart, setCart] = useState([]);

  return (
    <div>
      <NavBar id="nav-bar" cart={cart}/>
      <Overview product_id={product_id} productRating={productRating} totalNumReviews={totalNumReviews} cart={cart} setCart={setCart} item={item} setItem={setItem}/>
      <RelatedProducts product_id={product_id} setProductId={setProductId}/>
      <QuestionAnswer product_id={product_id}/>
      <RateAndReview product_id={product_id}
        item={item}
        productRating={productRating}
        setProductRating={setProductRating}
        totalNumReviews={totalNumReviews}
        setTotalNumReviews={setTotalNumReviews}/>
    </div>
  );
}


export default App