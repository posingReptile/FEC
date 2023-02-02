/* eslint-disable react/prop-types */
import React from 'react';
import IndividualQuestion from './IndividualQuestion.jsx'

const QuestionList = (props) => {

return (
  <IndividualQuestion search={props.search} searchInput={props.searchInput} productid={props.productId} numberOfQuestions={props.numberOfQuestions}/>
)
}


export default QuestionList;