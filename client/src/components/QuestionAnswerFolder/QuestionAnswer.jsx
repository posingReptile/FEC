/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'
import Modal from 'react-modal';
import NewQuestion from './NewQuestion.jsx'

import "./QuestionAnswerCss/QuestionAnswer.css";

const QuestionAnswer = ( {product_id, itemName, handleDataClick} ) => {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');
  const [numberOfQuestions, setNumberOfQuestions] = useState(2)
  const [modalIsOpen, setModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);

  let openModal = () => {
    setModal(true);
  }

  let closeModal = () => {
    setModal(false);
  }

  const handleChangeQuestionCount = (count) => {
    setQuestionCount(count)
  }

  return (
    <div onClick={(e) => handleDataClick(e, 'Q&A')} className="QuestionAnswersBlock">
      <h3>Questions & Answers</h3>
      <QuestionList handleChangeQuestionCount={handleChangeQuestionCount} productId={product_id} numberOfQuestions={numberOfQuestions} itemName={itemName} />
      <div className="QAButtons">
        {questionCount > 2 && numberOfQuestions === 2
          ? <button className="MoreQuestionsButton" onClick={() => { setNumberOfQuestions(questionCount)}}>More Answered Questions</button>
          : <button hidden={true}></button>
        }
        {numberOfQuestions > 2 && questionCount > 2
          ? <button className="loadFewerQuestionsButton" onClick={() => { setNumberOfQuestions(2) }}>Load Fewer Questions</button>
          : <button hidden={true}></button>
        }
        <button className="AddQuestion" onClick={openModal}>Add A Question</button>
        <Modal className="QuestionModal" overlayClassName="NewQuestionOverlay" isOpen={modalIsOpen} onRequestClose={closeModal}>
          <NewQuestion productId={product_id} itemName={itemName} />
          <button id="NewQuestionClose" onClick={closeModal}>X</button>
        </Modal>
      </div>
    </div>

  )
}

export default QuestionAnswer;