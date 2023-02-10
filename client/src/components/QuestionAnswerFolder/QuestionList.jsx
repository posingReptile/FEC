/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import IndividualQuestion from './IndividualQuestion.jsx'
import { HiMagnifyingGlass } from "react-icons/hi2";
import "./QuestionAnswerCss/QuestionList.css";
import axios from 'axios';




const QuestionList = ( { productId, numberOfQuestions, handleChangeQuestionCount, itemName } ) => {

  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    getQuestions();
  }, [productId])

  useEffect(() => {
    handleChangeQuestionCount(questions.length)
  }, [questions])

  const getQuestions = () => {
    axios.get('/questions', { params: { product_id: productId } })
      .then((data) => {
        setQuestions([])
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
      .catch(err => console.log('err in axios get questions', err))
  }
  const handleSearch = () => {
    getQuestions()
  }

  useEffect(() => {
    if (searchInput.length > 2 || searchInput.length === 0) {
      getQuestions()
    }
  }, [searchInput])


  const mappedQuestions = questions.slice(0, numberOfQuestions).map((question, index) => {
    return (
      <IndividualQuestion itemName={itemName} key={index} searchInput={searchInput} question={question} productid={productId} />
    )
  })

  return (
    <div>
      <div className="SearchBar">
        <input className="QuestionSearch" onChange={(e) => { setSearchInput(e.target.value) }} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."/>
        <HiMagnifyingGlass className="SearchButton" />
      </div>

      {questions.length === 0
        ? <div>No Results. Please try a different search term.</div>
        : <div className="QuestionList">{mappedQuestions}</div>
      }
    </div>
  )
}



export default QuestionList;