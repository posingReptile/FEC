import React, { useState, useEffect }  from 'react';
import axios from 'axios';


import Overview from './OverviewFolder/Overview.jsx';
import QuestionAnswer from './QuestionAnswerFolder/QuestionAnswer.jsx';
import RateAndReview from './RateAndReviewFolder/RateAndReview.jsx';



const App = (props) => {
  const [productId, setProductId] = useState('');

  return (
    // <div>
    //   <h1>Hello World</h1>
    // </div>
    <div>
      <Overview productId={productId}/>
      <QuestionAnswer productId={productId}/>
      <RateAndReview productId={productId}/>
    </div>
  );
}


export default App