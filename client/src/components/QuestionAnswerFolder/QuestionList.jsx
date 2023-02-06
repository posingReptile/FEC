/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx'
import axios from 'axios';
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./QuestionAnswerCss/QuestionList.css";



const QuestionList = ({ productId, numberOfQuestions, handleChangeQuestionCount }) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getReviews();
  }, [productId])

  useEffect(() => {
    handleChangeQuestionCount(questions.length)
  }, [questions])

  const getReviews = () => {
    setQuestions([])
    axios.get('/questions', { params: { product_id: productId } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          let questionAnswerObjs = data.data.results[i]
          if (searchInput.length > 2) {
            if (questionAnswerObjs.question_body.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1) {
              setQuestions(previous => [...previous, questionAnswerObjs])
            }
          } else {
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

  useEffect(() => {
    if (searchInput.length > 2 || searchInput.length === 0) {
    handleSearch()
    }
  }, [searchInput])

  const mappedQuestions = questions.slice(0, numberOfQuestions).map((question, index) => {
    return (
      <IndividualQuestion key={index} searchInput={searchInput} question={question} productid={productId} />
    )
  })

  return (
    <div>
      <div className="SearchBar">
        <input className="QuestionSearch" onChange={(e) => { setSearchInput(e.target.value) }} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
        <HiMagnifyingGlass className="SearchButton" />
      </div>
      {questions.length === 0
        ? <div>No Results. Please try a different search term.</div>
        : <div>{mappedQuestions}</div>
      }
    </div>
  )
}



export default QuestionList;