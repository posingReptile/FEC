/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'
import Modal from 'react-modal';
import NewQuestion from './NewQuestion.jsx'

import "./QuestionAnswer.css";

const QuestionAnswer = (props) => {
  Modal.setAppElement('#root')
  const [numberOfQuestions, setNumberOfQuestions] = useState(2)

  const [modalIsOpen, setModal] = useState(false);

  const [searchInput, setSearchInput] = useState('');

  let openModal = () => {
    setModal(true);
  }

  let closeModal = () => {
    setModal(false);
  }


  return (
    <div className="QuestionAnswersBlock">
      <h3>Questions & Answers</h3>
      <QuestionList searchInput={searchInput} productId={props.product_id} numberOfQuestions={numberOfQuestions} />
      <div>
        <button className="MoreQuestionsButton" onClick={() => { setNumberOfQuestions(numberOfQuestions + 2) }}>More Answered Questions</button>
        {numberOfQuestions > 2 ?
          <button onClick={() => { setNumberOfQuestions(2) }}>Load Fewer Questions</button>
          : <button hidden={true}></button>
        }
        <button className="AddQuestion" onClick={openModal}>Add A Question</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <NewQuestion productId={props.product_id} />
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>

  )
}

export default QuestionAnswer;