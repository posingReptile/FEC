import React, { useState, useEffect } from 'react';
import axios from 'axios';


const IndividualQuestion = ({ numberOfQuestions }) => {

  const [questions, setQuestions] = useState({})
  const [htmlQAList, setHtmlQAList] = useState([])



  const getReviews = () => {
    axios.get('/questions', { params: { product_id: 37311 } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setQuestions((previous) => ({
            ...previous, [data.data.results[i].question_body]:
              [[data.data.results[i].answers, data.data.results[i].question_helpfulness], data.data.results[i].question_helpfulness]
          }))
        }
      })
      .catch(err => console.log('err in axios get reviews', err))
  }


  const getFinalHtmlElements = () => {
    let finalQAObj = {}
    for (let key in questions) {
      finalQAObj[key] = [];
      for (let ansKey in questions[key][0][0]) {
        finalQAObj[key].push(questions[key][0][0][ansKey])
      }
      finalQAObj[key].push(questions[key][1])
    }


    for (let key in finalQAObj) {
      console.log(finalQAObj[key])
      let mappedAnswers = finalQAObj[key].slice(0, finalQAObj[key].length - 1).map((answer, index) => {
        return <div key={index}><div><text style={{ fontSize: '20px', fontWeight: 'bold' }}>A: </text>{answer.body}</div>
          <div> by {answer.answerer_name} | helpful? <text style={{ textDecoration: 'underline' }}>yes</text>
            ({answer.helpfulness}) | <text style={{ textDecoration: 'underline' }}> Report</text></div></div>
      })
      setHtmlQAList(previous => [...previous, [<div key={key}><text style={{ fontSize: '20px', fontWeight: 'bold' }}>Q:</text>{key}
        Helpful? <text style={{ textDecoration: 'underline' }}>yes</text> ({finalQAObj[key].pop()}) | <text style={{ textDecoration: 'underline' }}>Add Answer</text></div>, mappedAnswers]])
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
          ? renderQuestionAnswerElements
          : 'Loading'
        }
      </div>
    </div>
  )
}


export default IndividualQuestion