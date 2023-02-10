import React, { useState } from 'react';
import axios from 'axios'
import "./QuestionAnswerCss/IndividualAnswer.css";
import Highlighter from 'react-highlight-words';
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";

const IndividualAnswers = ({ answer, searchInput }) => {
  if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

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

  let date = new Date(answer.date);
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  date = date.toLocaleDateString('en-US', dateOptions);


  if (hasBeenReported) {
    return <div>Answer has been reported and sent for review.</div>
  } else {
    return (
      <div className="answerBlock" data-testid="answerBlock" key={answer.id}>
        <div className="answerBody">
          <h3><strong>A:&nbsp;<Highlighter searchWords={[searchInput]} textToHighlight={answer.body} /></strong></h3>
        </div>
        <div className="answerPhotos">
          {answer.photos ? answer.photos.map(photo => {
            return (
              <div className="singlePhotoDiv" data-testid="Photo" onClick={() => { openModal(photo) }} key={photo} style={{ width: '10%', position: 'relative' }}>
                <img src={photo} alt="placeholder" />
              </div>
            )
          }) : null}
        </div>
        <div className="answerInfo">
          &nbsp; &nbsp; by {answer.answerer_name}, &nbsp;{date}&nbsp; &nbsp; | &nbsp; &nbsp;Helpful?&nbsp; &nbsp;
          <div className="helpfulBlock">
            <u className="answerYes" data-testid="answerYes" onClick={() => { handleMarkAnswerHelpful(answer.id) }} >Yes</u>
            <span className={"marked" + markedHelpful} >({markedHelpful ? answer.helpfulness + 1 : answer.helpfulness})</span>
          </div>
          <u className="Report" onClick={() => { handleReportAnswer(answer.id) }}>Report</u>
          <Modal overlayClassName="expandedPhotoOverlay" className="expandedPhoto" isOpen={modalIsOpen} onRequestClose={closeModal}>
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