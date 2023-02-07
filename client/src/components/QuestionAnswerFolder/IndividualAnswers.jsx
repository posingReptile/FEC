import React, { useState } from 'react';
import TimeAgo from 'react-timeago';
import axios from 'axios'
import "./QuestionAnswerCss/IndividualAnswer.css";
import Highlighter from 'react-highlight-words';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const IndividualAnswers = ({ answer, searchInput }) => {

  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [hasBeenReported, setHasBeenReported] = useState(false);
  const [modalIsOpen, setModal] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');


  const handleMarkAnswerHelpful = (id) => {
    if (!markedHelpful) {
      setMarkedHelpful(true)
      axios.put('/QAHelpfulOrReport', { query: `answers/${id}/helpful` })
        .catch((err) => console.log('err in handleMarkAnswerHelpful axios Request', err))
    }
  }

  const handleReportAnswer = (id) => {
    setHasBeenReported(true)
    axios.put('/QAHelpfulOrReport', { query: `answers/${id}/report` })
      .catch((err) => console.log('err in handleReportAnswer axios Request', err))
  }

  let openModal = (photo) => {
    setCurrentPhoto(photo)
    setModal(true);
  }

  let closeModal = () => {
    setCurrentPhoto('')
    setModal(false);
  }


  if (hasBeenReported) {
    return <div>Answer has been reported and sent for review.</div>
  } else {
    return (
      <div className="answerBlock" key={answer.id}>
        <div className="answerBody">
          <h3><strong>A:&nbsp;<Highlighter searchWords={[searchInput]} textToHighlight={answer.body} /></strong></h3>
        </div>
        <div className="answerPhotos">
          {answer.photos ? answer.photos.map(photo => {
            return (
              <div onClick={() => { openModal(photo) }} key={photo} style={{ width: '10%', position: 'relative' }}>
                <img src={photo} alt="placeholder" />
              </div>
            )
          }) : null}
        </div>
        <div className="answerInfo">
          &nbsp; &nbsp; by {answer.answerer_name}, &nbsp;<TimeAgo date={answer.date} locale="en-US" />&nbsp; &nbsp; | &nbsp; &nbsp;Helpful?&nbsp; &nbsp;
          <div className="helpfulBlock">
            <u className="answerYes" onClick={() => { handleMarkAnswerHelpful(answer.id) }} >Yes</u>
            <span className={"marked" + markedHelpful} >({markedHelpful ? answer.helpfulness + 1 : answer.helpfulness})</span>
          </div>
          <u className="Report" onClick={() => { handleReportAnswer(answer.id) }}>Report</u>
          <Modal className="expandedPhoto" isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="singlePhotoContainer">
              <img className="singlePhoto" src={currentPhoto} alt="placeholder" />
              <div className="closeButtonContainer" onClick={closeModal}>
                <AiOutlineClose className="close" />
              </div>
            </div>
          </Modal>
        </div>

      </div>
    )
  }
}


export default IndividualAnswers