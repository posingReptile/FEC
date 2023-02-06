/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'
import Modal from 'react-modal';
import NewQuestion from './NewQuestion.jsx'

import "./QuestionAnswerCss/QuestionAnswer.css";

const QuestionAnswer = ( {product_id} ) => {
  Modal.setAppElement('#root')
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
    <div className="QuestionAnswersBlock">
      <h3>Questions & Answers</h3>
      <QuestionList handleChangeQuestionCount={handleChangeQuestionCount} productId={product_id} numberOfQuestions={numberOfQuestions} />
      <div>
        {questionCount > 2
          ? <button className="MoreQuestionsButton" onClick={() => { setNumberOfQuestions(numberOfQuestions + 2) }}>More Answered Questions</button>
          : <button hidden={true}></button>
        }
        {numberOfQuestions > 2
          ? <button className="loadFewerQuestionsButton" onClick={() => { setNumberOfQuestions(2) }}>Load Fewer Questions</button>
          : <button hidden={true}></button>
        }
        <button className="AddQuestion" onClick={openModal}>Add A Question</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <NewQuestion productId={product_id} />
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>

  )
}

export default QuestionAnswer;