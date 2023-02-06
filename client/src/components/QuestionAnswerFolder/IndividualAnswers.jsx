import React, { useState } from 'react';
import TimeAgo from 'react-timeago';
import axios from 'axios'
import "./QuestionAnswerCss/IndividualAnswer.css";

const IndividualAnswers = ({ answer }) => {

  const [markedHelpful, setMarkedHelpful] = useState(false);
  const [hasBeenReported, setHasBeenReported] = useState(false);

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

  if (hasBeenReported) {
    return <div hidden={true}></div>
  } else {
    return (
      <div className="answerBlock" key={answer.id}>
        <div className="answerBody">
          <h3><strong>A:&nbsp;{answer.body}</strong></h3>
        </div>
        {answer.photos ? answer.photos.map(photo => {
          return (
            <div key={photo} style={{ width: '10%', position: 'relative' }}>
              <img src={photo} alt="placeholder" />
            </div>
          )
        }) : null}
        <div className="answerInfo">
          &nbsp; &nbsp; by {answer.answerer_name}, &nbsp;<TimeAgo date={answer.date} locale="en-US" />&nbsp; &nbsp; | &nbsp; &nbsp;helpful?&nbsp; &nbsp;
          <u className="answerYes" onClick={() => { handleMarkAnswerHelpful(answer.id) }}>Yes</u>
          {markedHelpful
            ? <div>({answer.helpfulness + 1})&nbsp; &nbsp; | &nbsp; &nbsp;</div>
            : <div>({answer.helpfulness})&nbsp; &nbsp; | &nbsp; &nbsp;</div>
          }
          <u className="Report" onClick={() => { handleReportAnswer(answer.id) }}>Report</u>
        </div>
      </div>
    )
  }
}


export default IndividualAnswers