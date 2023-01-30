import React, { useState, useEffect } from 'react';
import axios from 'axios';


const IndividualQuestion = ({numberOfQuestions}) => {

  const [questions, setQuestions] = useState({})
  const [htmlQAList, setHtmlQAList] = useState([])

console.log(numberOfQuestions)

  const getReviews = () => {
    axios.get('/questions', { params: { product_id: 37311 } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setQuestions((previous) => ({ ...previous, [data.data.results[i].question_body]: data.data.results[i].answers }))
        }
      })
      .catch(err => console.log('err in axios get reviews', err))
  }

  const getFinalHtmlElements = () => {
    let finalQAObj = {}
    for (let key in questions) {
      finalQAObj[key] = [];
      for (let ansKey in questions[key]) {
        finalQAObj[key].push(questions[key][ansKey])
      }
    }

    for (let key in finalQAObj) {
      let mappedAnswers = finalQAObj[key].map((answer, index) => {
        return <div key={index}>A: {answer.body}</div>
      })
      setHtmlQAList(previous => [...previous, [<div key={key}>Q: {key}</div>, mappedAnswers]])
    }
  }


  const renderQuestionAnswerElements =
    htmlQAList.slice(0, numberOfQuestions).map((q) => {
      let answers = q[1].slice(0, 2).map((a) => {
        return a
      })

      return ([q[0], answers])
    })





  useEffect(() => {
    getReviews();
  }, [])

  useEffect(() => {
    getFinalHtmlElements();
  }, [questions])

  return (
    <div>
      <div>
        {htmlQAList.length > 0
      ?  renderQuestionAnswerElements
      : 'Loading'
      }
      </div>
    </div>
  )
}


export default IndividualQuestion