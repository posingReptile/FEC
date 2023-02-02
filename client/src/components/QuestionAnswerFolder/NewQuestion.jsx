import React, { useState } from 'react';
import axios from 'axios';




const NewQuestion = (props) => {

  const [questionInput, setQuestionInput] = useState({
    email: '',
    nickname: '',
    question: '',
    product_id: props.productId
  })

  const handleSubmitNewQuestion = () => {
    axios.post('/addQuestion', {value: questionInput})
    .catch(err => console.log('err in axios post add question', err))
  }

  const handleQuestionInputChange = (e) => {
    setQuestionInput({...questionInput, [e.target.name]: e.target.value})
  }

  return (
    <form onSubmit={handleSubmitNewQuestion}>
      <p>Email Address:</p>
      <input name="email" onChange={handleQuestionInputChange} type="email" placeholder="Example: jackTheRipper@gmail.com" required  ></input>
      <p>Nickname:</p>
      <input name="nickname" onChange={handleQuestionInputChange} placeholder="Example: jackyBoy" required minLength="5" ></input>
      <p>Question:</p>
      <input name="question" onChange={handleQuestionInputChange} placeholder="Example: Why am I like this?" required minLength="5" ></input>
      <input type="submit" />
    </form>
  )
}



export default NewQuestion