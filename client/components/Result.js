import React from 'react';

const Result = (props) => {
  const { extrovert, introvert, intuition, sensing, thinking, feeling, judging, prospecting } = props.content;
  let result = '';
  if (extrovert > introvert) result += 'E';
  else result += 'I';
  if (sensing > intuition) result += 'S';
  else result += 'N';
  if (feeling > thinking) result += 'F';
  else result += 'T';
  if (judging > prospecting) result += 'J';
  else result += 'P';
  return (
    <h1 className="question">{'You are an ' + result}</h1>
  )
}

export default Result;
