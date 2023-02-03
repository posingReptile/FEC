import React, { useState }  from 'react';
// import axios from 'axios';


import Overview from './OverviewFolder/Overview.jsx';
import QuestionAnswer from './QuestionAnswerFolder/QuestionAnswer.jsx';
import RateAndReview from './RateAndReviewFolder/RateAndReview.jsx';



const App = () => {
  const [product_id, setProductId] = useState('37311');

  return (
    <div>
      <Overview product_id={product_id}/>
      <QuestionAnswer product_id={product_id}/>
      <RateAndReview product_id={product_id}/>
    </div>
  );
}


export default App