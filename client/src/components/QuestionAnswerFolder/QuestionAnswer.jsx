/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'

const QuestionAnswer = (props) => {

const [numberOfQuestions, setNumberOfQuestions] = useState(2)

  return (
    <div>
      <input placeholder="Search Questions and Answers"></input>

      <QuestionList productId={props.product_id} numberOfQuestions={numberOfQuestions} />
      <div>
        <button onClick={()=> {setNumberOfQuestions(numberOfQuestions+2)}}>More Answered Questions</button>
        {numberOfQuestions > 2 ?
        <button onClick={()=>{setNumberOfQuestions(2)}}>Load Fewer Questions</button>
        :<button hidden={true}></button>
        }
        <button>Add A Question</button>
      </div>
    </div>

  )
}

export default QuestionAnswer;