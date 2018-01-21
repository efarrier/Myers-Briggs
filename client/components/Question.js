import React from 'react';
import Count from './Count'

function Question (props) {
  return (
    <form
      key={props.count}
      id="question-form"
      onSubmit={props.handleNext}>
      <div className="wrapper">
        <Count count={props.count} total={props.total} />
        <div className="question">{props.content}</div>
        <div className="answers">
          <div className="answer-choice">
            <button
              onClick={props.handleClick}
              value={-2}>
              1
            </button>
            <div className="answer-label" id="disagree">Disagree</div>
          </div>
          <div className="answer-choice">
            <button
              onClick={props.handleClick}
              value={-1}>
              2
            </button>
          </div>
          <div className="answer-choice">
            <button
              onClick={props.handleClick}
              value={0}>
              3
            </button>
            <div className="answer-label" id="disagree">Neutral</div>
          </div>
          <div className="answer-choice">
            <button
              onClick={props.handleClick}
              value={1}>
              4
            </button>
          </div>
          <div className="answer-choice">
            <button
              onClick={props.handleClick}
              value={2}>
              5
            </button>
            <div className="answer-label" id="disagree">Agree</div>
          </div>
        </div>
        <button
          className="next-button"
          type="submit"
          form="question-form"
          value="Next">NEXT QUESTION
        </button>
      </div>
    </form>
  )
}

export default Question;
