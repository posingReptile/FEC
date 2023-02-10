/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import NewAnswer from './NewAnswer.jsx';
import IndividualAnswers from './IndividualAnswers.jsx'
import Highlighter from 'react-highlight-words';

import "./QuestionAnswerCss/IndividualQuestion.css";

const IndividualQuestion = ( {question, productid, searchInput, itemName} ) => {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

  const [modalIsOpen, setModal] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [numOfAnswers, setNumOfAnswers] = useState(2);
  const [markedHelpful, setMarkedHelpful] = useState(false);


  let openModal = (e) => {
    setQuestionId(e.target.id)
    setModal(true);
  }


  let closeModal = () => {
    setModal(false);
  }

  const handleLoadFewerAnswer = (q) => {
    setNumOfAnswers(2)
  }

  const handleLoadMoreAnswer = (q) => {
    setNumOfAnswers(answers.length)
  }

  const handleMarkQuestionHelpful = (e) => {
    if (!markedHelpful) {
      setMarkedHelpful(true)
      let id = e.target.id
      axios.put('/QAHelpfulOrReport', { query: `questions/${id}/helpful` })
        .catch((err) => console.log('err in handleMarkQuestionHelpful axios Request', err))
    }
  }
  let answers = [];
  for (let key in question.answers) {
    answers.push(question.answers[key])
  }
  answers.sort(function(a, b) {
    return parseFloat(b.helpfulness) - parseFloat(a.helpfulness);
});

  const mappedAnswers = answers.slice(0, numOfAnswers).map((answer) => {
    return (
      <IndividualAnswers searchInput={searchInput} key={answer.id} answer={answer} />
    )
  })

  return (
    <div className="QBlock" data-testid="QBlock" key={question.question_id}>
      <h3><strong>Q:<Highlighter searchWords={[searchInput]} textToHighlight={question.question_body} /></strong></h3>
      <div className="Qhelpful">
        Helpful? &nbsp;
        <u className="questionYes" data-testid="questionYes" id={question.question_id} onClick={(e) => { handleMarkQuestionHelpful(e) }} >Yes</u>
            <span className={"marked" + markedHelpful} >({markedHelpful ? question.question_helpfulness + 1 : question.question_helpfulness})</span>
        <u className="AddAnswerButton" id={question.question_id} onClick={(e) => { openModal(e) }}>Add Answer</u>
        <Modal className="AnswerModal" overlayClassName="AnswerModalOverlay" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <NewAnswer itemName={itemName} questionId={questionId} questionBody={question.question_body} />
          <button id="NewAnswerClose"onClick={closeModal}>X</button>
        </Modal>
      </div>
      <div className="answer" data-testid="answer">{mappedAnswers}</div>
      <div className="LoadMoreAnswers">
        {answers.length > 2 && numOfAnswers < answers.length
          ? <div className="MoreAnswer" onClick={handleLoadMoreAnswer}>Load More Answers &nbsp; &nbsp;</div>
          : <div hidden={true}></div>
        }
        {numOfAnswers > 2 && answers.length > 2
          ? <div onClick={handleLoadFewerAnswer}> Load Fewer Answers </div>
          : <div hidden={true}></div>
        }
      </div>
    </div>
  )
}


export default IndividualQuestion