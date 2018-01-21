import React, { Component } from 'react'
import Header from './Header'
import Question from './Question'
import Result from './Result';
import questions from '../api/questions'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0,
      question: {},
      answer: 0,
      answersCount: {
        extrovert: 0,
        introvert: 0,
        intuition: 0,
        sensing: 0,
        thinking: 0,
        feeling: 0,
        judging: 0,
        prospecting: 0
      },
      finished: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this)
  }

  componentWillMount () {
    this.setState({
      question: questions[this.state.counter]
    })
  }

  handleClick (evt) {
    evt.preventDefault();
    const answer = +evt.target.value;
    this.setState({
      answer: answer
    })
  }

  handleNextClick (evt) {
    evt.preventDefault();
    const newAnswersCount = Object.assign({}, this.state.answersCount);
    newAnswersCount[this.state.question.type] += this.state.answer;
    this.setState({
      answersCount: newAnswersCount
    })
    this.showNextQuestion();
  }

  showNextQuestion () {
    const counter = this.state.counter + 1
    if (counter < questions.length) {
      this.setState({
        counter: counter,
        question: questions[counter],
        answer: 0
      })
    } else {
      this.setState({
        finished: true
      })
    }
  }

  render() {
    const { question, finished, answersCount } = this.state
    return (
      <div>
        <Header />
        {
          finished ?
          <Result content={answersCount} />
          :
          <Question
          count={this.state.counter}
          total={questions.length}
          content={question.question}
          handleClick={this.handleClick}
          handleNext={this.handleNextClick} />
        }

      </div>
    )
  }
}

