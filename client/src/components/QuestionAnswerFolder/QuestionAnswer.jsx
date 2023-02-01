/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import QuestionList from './QuestionList.jsx'
import Modal from 'react-modal';
import NewQuestion from './NewQuestion.jsx'

const QuestionAnswer = (props) => {

  const [numberOfQuestions, setNumberOfQuestions] = useState(2)

  const [modalIsOpen, setModal] = useState(false);

  let openModal = () => {
    setModal(true);
  }

  let closeModal = () => {
    setModal(false);
  }


  return (
    <div>
      <input placeholder="Search Questions and Answers"></input>

      <QuestionList productId={props.product_id} numberOfQuestions={numberOfQuestions} />
      <div>
        <button onClick={() => { setNumberOfQuestions(numberOfQuestions + 2) }}>More Answered Questions</button>
        {numberOfQuestions > 2 ?
          <button onClick={() => { setNumberOfQuestions(2) }}>Load Fewer Questions</button>
          : <button hidden={true}></button>
        }
        <button onClick={openModal}>Add A Question</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <NewQuestion productId={props.product_id} />
          <button onClick={closeModal}>close</button>
        </Modal>
      </div>
    </div>

  )
}

export default QuestionAnswer;