/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import NewAnswer from './NewAnswer.jsx'

import "./Q&A.css";

const IndividualQuestion = (props) => {
  let productId = props.productid
  const [questions, setQuestions] = useState({})
  const [htmlQAList, setHtmlQAList] = useState([])
  const [modalIsOpen, setModal] = useState(false);
  const [questionId, setQuestionId] = useState(0);

  let openModal = (e) => {
    setQuestionId(e.target.id)
    setModal(true);
  }


  let closeModal = () => {
    setModal(false);
  }

  const handleLoadFewerAnswer = (q) => {
    q[2] = 2
    getReviews()
  }

  const handleLoadMoreAnswer = (q) => {
    if (q[2] >= q[1].length && q[1].length > 2) {
    }
    q[2] += 2
    getReviews()
  }

  const getReviews = () => {
    axios.get('/questions', { params: { product_id: productId } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          setQuestions((previous) => ({
            ...previous, [data.data.results[i].question_body]:
              [[data.data.results[i].answers, data.data.results[i].question_id], data.data.results[i].question_helpfulness]
          }))
        }
      })
      .catch(err => console.log('err in axios get reviews', err))
  }

  const getFinalHtmlElements = () => {
    let finalQAObj = {}
    for (let key in questions) {
      finalQAObj[key] = [[]];
      finalQAObj[key].push(questions[key][0][1])
      for (let ansKey in questions[key][0][0]) {
        finalQAObj[key][0].push(questions[key][0][0][ansKey])
      }
      finalQAObj[key][0].push(questions[key][1])
    }

    for (let key in finalQAObj) {
      let mappedAnswers = finalQAObj[key][0].slice(0, finalQAObj[key][0].length - 1).map((answer, index) => {
        console.log(answer)
        return (
          <div className="answerBlock" key={index}>
            <div className="answerBody">
              <h3><strong>A:</strong></h3>
              {answer.body}
            </div>
            {answer.photos ? answer.photos.map(photo => {
              return (
              <div key={photo} style={{ width: '10%', position: 'relative' }}>
                <img src={photo} alt="placeholder" />
              </div>
            )
            }) : null}
            <div className="answerInfo">
              By: {answer.answerer_name} | helpful?
              <u>Yes</u>
              ({answer.helpfulness}) |
              <u>Report</u>
            </div>
          </div>
        )
      });



      setHtmlQAList(previous => [...previous, [
        <div className="QBlock" key={key}>
          <h3><strong>Q: {key}</strong></h3>
          <div className="Qhelpful">
            Helpful?
            <u>Yes</u>
            ({finalQAObj[key][0].pop()}) |
            <u id={finalQAObj[key][1]} onClick={(e) => { openModal(e) }}>Add Answer</u>
          </div>
        </div>,
        mappedAnswers, 2]])
    }
  }


  const renderQuestionAnswerElements =
    htmlQAList.slice(0, props.numberOfQuestions).map((q) => {

      let answers = q[1].slice(0, q[2]).map((a) => {
        return a
      })
      if (q[2] >= q[1].length && q[1].length > 2) {
        return ([q[0], answers, <button key="loadFewerAnswers" onClick={() => { handleLoadFewerAnswer(q) }}>Load Fewer Answers</button>])
      } else if (q[1].length > 2) {
        return ([q[0], answers, <button key="loadMoreAnswers" onClick={() => { handleLoadMoreAnswer(q) }}>Load More Answers</button>])
      } else {
        return ([q[0], answers])
      }
    })


  useEffect(() => {
    getReviews();
  }, [])

  useEffect(() => {
    getFinalHtmlElements();
  }, [questions])

  return (
    <div>
      {htmlQAList.length > 0
        ? renderQuestionAnswerElements
        : 'Loading'
      }
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <NewAnswer questionId={questionId} />
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}


export default IndividualQuestion