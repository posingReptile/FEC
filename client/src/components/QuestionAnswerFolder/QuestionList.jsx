/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx'
import axios from 'axios';
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./QuestionAnswerCss/QuestionList.css";



const QuestionList = ({productId, numberOfQuestions, handleChangeQuestionCount }) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getReviews();
  }, [])
  useEffect(()=> {
    handleChangeQuestionCount(questions.length)
  }, [questions])

  const getReviews = () => {
    axios.get('/questions', { params: { product_id: productId } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          let questionAnswerObjs = data.data.results[i]
          if (questionAnswerObjs.question_body.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1) {
          setQuestions(previous => [...previous, questionAnswerObjs])
          }
        }
      })
      .catch(err => console.log('err in axios get reviews', err))
  }
  const handleSearch = () => {
    setQuestions([])
    getReviews()
  }
  const mappedQuestions = questions.slice(0, numberOfQuestions).map((question, index) => {
    return (
      <IndividualQuestion key={index} question={question} productid={productId} />
    )
  })

  return (
    <div>
      <input className="QuestionSearch" onChange={(e) => { setSearchInput(e.target.value) }} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      <HiMagnifyingGlass className="SearchButton" onClick={handleSearch} />
      <div>{mappedQuestions}</div>
    </div>
  )
}



export default QuestionList;