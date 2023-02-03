/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import NewAnswer from './NewAnswer.jsx';
import TimeAgo from 'react-timeago';

import "./IndividualQuestion.css";

const IndividualQuestion = (props) => {
  Modal.setAppElement('#root')
  let productId = props.productid
  const [questions, setQuestions] = useState({})
  const [htmlQAList, setHtmlQAList] = useState([])
  const [modalIsOpen, setModal] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [searchInput, setSearchInput] = useState('')


  let openModal = (e) => {
    setQuestionId(e.target.id)
    setModal(true);
  }


  let closeModal = () => {
    setModal(false);
  }

  const handleLoadFewerAnswer = (q) => {
    q[2] = 2
    setQuestions({})
  }

  const handleLoadMoreAnswer = (q) => {
    if (q[2] >= q[1].length && q[1].length > 2) {
    }
    q[2] += 2
    setQuestions({})
  }

  const handleSearch = () => {
    setQuestions({}),
    setHtmlQAList([]),
    getReviews()
  }
  const getReviews = () => {
    axios.get('/questions', { params: { product_id: productId } })
      .then((data) => {
        for (let i = 0; i < data.data.results.length; i++) {
          if (data.data.results[i].question_body.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1) {
            setQuestions((previous) => ({
              ...previous, [data.data.results[i].question_body]:
                [[data.data.results[i].answers, data.data.results[i].question_id], data.data.results[i].question_helpfulness]
            }))
          }
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

            &nbsp; &nbsp; by {answer.answerer_name}, &nbsp;<TimeAgo date={answer.date} locale="en-US"/>&nbsp; &nbsp; | &nbsp; &nbsp;helpful?&nbsp; &nbsp;
              <u>Yes</u>
              ({answer.helpfulness})&nbsp; &nbsp; | &nbsp; &nbsp;
              <u>Report</u>
            </div>
          </div>
        )
      });



      setHtmlQAList(previous => [...previous, [
        <div className="QBlock" key={key}>
          <h3><strong>Q: {key}</strong></h3>
          <div className="Qhelpful">
            Helpful? &nbsp;
            <u>Yes</u>
            ({finalQAObj[key][0].pop()})&nbsp; &nbsp; |&nbsp; &nbsp;
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
        return ([q[0], answers, <button className="LoadFewerAnswers" key="loadFewerAnswers" onClick={() => { handleLoadFewerAnswer(q) }}>Load Fewer Answers</button>])
      } else if (q[1].length > 2) {
        return ([q[0], answers, <button className="LoadMoreAnswers" key="loadMoreAnswers" onClick={() => { handleLoadMoreAnswer(q) }}>Load More Answers</button>])
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
    <div className="individualQuestion">
     <input className="QuestionSearch" onChange={(e)=> {setSearchInput(e.target.value)}} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
      <button className="SearchButton" onClick={handleSearch}>Search</button>
      {htmlQAList.length > 0
        ? renderQuestionAnswerElements
        : 'No questions matching that search'
      }
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <NewAnswer questionId={questionId} />
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}


export default IndividualQuestion