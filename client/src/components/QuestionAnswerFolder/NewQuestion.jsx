import React, { useState } from 'react';
import axios from 'axios';

import './QuestionAnswerCss/NewQuestion.css'

const NewQuestion = ({ productId, itemName }) => {

  const [questionInput, setQuestionInput] = useState({
    email: '',
    nickname: '',
    question: '',
    product_id: productId
  })

  const handleSubmitNewQuestion = () => {
    axios.post('/addQuestion', { value: questionInput })
      .catch(err => console.log('err in axios post add question', err))
  }

  const handleQuestionInputChange = (e) => {
    setQuestionInput({ ...questionInput, [e.target.name]: e.target.value })
  }

  return (
    <form className="NewQuestionForm" data-testid="newQuestionForm" onSubmit={handleSubmitNewQuestion}>
      <div>Ask Your Question About: </div>
      <h3>{itemName}</h3>
      <h5>Email Address:<i className="redStar">*</i></h5>
      <input className="QuestionEmailInput" name="email" onChange={handleQuestionInputChange} type="email" placeholder="Example: jackTheRipper@gmail.com" required  ></input>
      <h5>Nickname:<i className="redStar">*</i></h5>
      <input className="QuestionNicknameInput" name="nickname" onChange={handleQuestionInputChange} placeholder="Example: jackyBoy" required minLength="5" ></input>
      <h5>Question:<i className="redStar">*</i></h5>
      <textarea name="question" onChange={handleQuestionInputChange} className="AnswerInput" placeholder="Why am I like this?" cols="40" wrap="hard"></textarea>
      <input className="submitButton" type="submit" />
    </form>
  )
}



export default NewQuestion