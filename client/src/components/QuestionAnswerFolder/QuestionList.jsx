import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx'

const QuestionList = (props) => {

return (
  <IndividualQuestion productid={props.productId} numberOfQuestions={props.numberOfQuestions}/>
)
}


export default QuestionList;