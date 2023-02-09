import React, { useState } from 'react';
import axios from 'axios';




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
    <form data-testid="newAnswerForm" onSubmit={handleSubmitNewQuestion}>
    <div>Submit Your Answer: </div>
    <div>{itemName}: {questionBody}</div>
      <p>Email Address:</p>
      <input name="email" onChange={handleAnswerInputChange} type="email" placeholder="Example: jackTheRipper@gmail.com"   required  ></input>
      <p>Nickname:</p>
      <input name="nickname" onChange={handleAnswerInputChange} placeholder="Example: jackyBoy" minLength="5" required></input>
      <p>Answer:</p>
      <input name="answer" onChange={handleAnswerInputChange} placeholder="Example: You are the answer" minLength="5" required></input>
      <p>Upload an Image: </p>
      <input type="file" id="imageUpload" name="imageUpload" accept="image/png, image/jpeg"  onChange={(e) => setImag(previous => [...previous, URL.createObjectURL(e.target.files[0])])} multiple />
      <img src={imag} height="200" width="200" alt="" />
      <input data-testid="Submit" type="submit" />
    </form>
  )
}



export default NewAnswer