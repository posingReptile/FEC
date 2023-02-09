import React, { useState, useMemo }  from 'react';
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
  const customerData = useMemo(() => ({}), []);



  const handleDataClick = (e, module) => {
    const date = new Date();
    const elementClicked = e.target;
    const dateAndTime = 'Time: ' + date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds() + " Date " + date.getMonth() + ":" +date.getDay() + ":" + date.getFullYear() ;
    customerData[dateAndTime] = {elementClicked, dateAndTime, module};
    // console.log(customerData);
  };

  return (
    <div>
      <NavBar id="nav-bar" cart={cart}/>
      <div id="widgets">
        <Overview product_id={product_id} productRating={productRating} totalNumReviews={totalNumReviews} cart={cart} setCart={setCart} item={item} setItem={setItem} handleDataClick={handleDataClick}/>
        <RelatedProducts product_id={product_id} setProductId={setProductId}/>
        <QuestionAnswer product_id={product_id} itemName={item.name} handleDataClick={handleDataClick}/>
        <RateAndReview product_id={product_id}
          item={item}
          productRating={productRating}
          setProductRating={setProductRating}
          totalNumReviews={totalNumReviews}
          setTotalNumReviews={setTotalNumReviews}
          handleDataClick={handleDataClick}/>
      </div>
    </div>
  );
}


export default App