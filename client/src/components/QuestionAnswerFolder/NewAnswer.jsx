import React, { useState } from 'react';
import axios from 'axios';


import './QuestionAnswerCss/NewAnswer.css'

const NewAnswer = ({ questionId, itemName, questionBody }) => {

  const [imag, setImag] = useState([]);
  const [answerInput, setAnswerInput] = useState({
    email: '',
    nickname: '',
    answer: '',
    question_id: questionId
  })
  const handleSubmitNewQuestion = () => {
    axios.post('/addAnswer', {value: answerInput})
    .catch(err => console.log('err in axios post add question', err))
  }

  const handleAnswerInputChange = (e) => {
    setAnswerInput({...answerInput, [e.target.name]: e.target.value})
  }

  return (
    <form className="newAnswerForm" data-testid="newAnswerForm" onSubmit={handleSubmitNewQuestion}>
    <div>Submit Your Answer: </div>
    <h3>{itemName}: {questionBody}</h3>
      <h5>Email Address:<i className="redStar">*</i></h5>
      <input name="email" onChange={handleAnswerInputChange} type="email" placeholder="Example: jackTheRipper@gmail.com"   required  ></input>
      <h5>Nickname:<i className="redStar">*</i></h5>
      <input name="nickname" onChange={handleAnswerInputChange} placeholder="Example: jackyBoy" minLength="5" required></input>
      <h5>Answer:<i className="redStar">*</i></h5>
      <textarea name="answer" onChange={handleAnswerInputChange} className="AnswerInput" placeholder="This is an Answer." cols="40" wrap="hard"></textarea> 
      <h5>Upload an Image: </h5>
      <input type="file" id="imageUpload" name="imageUpload" accept="image/png, image/jpeg"  onChange={(e) => setImag(previous => [...previous, URL.createObjectURL(e.target.files[0])])} multiple />
      {imag.length > 0 
      ? <img src={imag} height="200" width="200" alt="" />
      : <img src={imag} alt="" />
      }
      <input className="submitButton" data-testid="Submit" type="submit" />
    </form>
  )
}



export default NewAnswer