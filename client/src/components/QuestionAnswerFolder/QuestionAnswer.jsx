import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'

const QuestionAnswer = (props) => {

const [numberOfQuestions, setNumberOfQuestions] = useState(2)

  return (
    <div>
      <input placeholder="Search Questions and Answers"></input>
      <QuestionList numberOfQuestions={numberOfQuestions} />
      <div>
        <button onClick={()=> {setNumberOfQuestions(numberOfQuestions+2)}}>More Answered Questions</button>
        <button>Add A Question</button>
      </div>
    </div>

  )
}

export default QuestionAnswer;