import React, { useState, useEffect }  from 'react';
import axios from 'axios';


import Overview from './OverviewFolder/Overview.jsx';
import QuestionAnswer from './QuestionAnswerFolder/QuestionAnswer.jsx';
import RateAndReview from './RateAndReviewFolder/RateAndReview.jsx';



const App = (props) => {

  return (
    // <div>
    //   <h1>Hello World</h1>
    // </div>
    <div>
      <Overview />
      <QuestionAnswer />
      <RateAndReview />
    </div>
  );
}


export default App