var questions = [
  {
    question: 'You often intiate conversations.',
    type: 'extrovert'
  }, {
    question: 'You consider yourself relatively open and easy to get to know.',
    type: 'extrovert'
  },
  {
    question: 'You do not mind being the center of attention.',
    type: 'extrovert'
  },
  {
    question: 'You often feel more energetic after being with a group of people.',
    type: 'extrovert'
  },
  {
    question: 'You prefer to work alone than in a group.',
    type: 'introvert'
  },
  {
    question: 'You consider yourself to be a relatively reserved and quiet person.',
    type: 'introvert'
  },
  {
    question: 'You often prefer to stay home and read an interesting book than attend a social event.',
    type: 'introvert'
  }, {
    question: 'When in large groups, you often find it difficult to relax.',
    type: 'introvert'
  },
  {
    question: 'You frequently do things out of sheer curiousity.',
    type: 'intuition'
  },
  {
    question: 'You often find yourself lost in thought.',
    type: 'intuition'
  },
  {
    question: 'You ponder the meaning of life more than most people.',
    type: 'intuition'
  },
  {
    question: 'You spend a lot of time mulling over unrealistic and impractical yet fascinating ideas.',
    type: 'intuition'
  },
  {
    question: 'It is better to rely on experience than imagination.',
    type: 'sensing'
  }, {
    question: 'You tend to get bored when reading highly theoretical books.',
    type: 'sensing'
  }, {
    question: 'Traditions are an important part of society and we should do our best to uphold them.',
    type: 'sensing'
  },
  {
    question: 'You consider yourself more practical than creative.',
    type: 'sensing'
  },
  {
    question: 'You often find it difficult to relate to other people\'s feelings.',
    type: 'thinking'
  },
  {
    question: 'You rarely have mood swings.',
    type: 'thinking'
  },
  {
    question: 'In debates, truth is more important than people\'s sensitivities.',
    type: 'thinking'
  }, {
    question: 'You trust your sense of logic and reason more than your emotions.',
    type: 'thinking'
  }, {
    question: 'Your actions are often influenced by your emotions.',
    type: 'feeling'
  },
  {
    question: 'You worry a lot about how your actions might affect other people.',
    type: 'feeling'
  },
  {
    question: 'You sometimes feel as though your emotions control you more than you control them.',
    type: 'feeling'
  },
  {
    question: 'You try to follow your heart when making big decisions.',
    type: 'feeling'
  },
  {
    question: 'Having a messy inbox does not bother you very much.',
    type: 'prospecting'
  },
  {
    question: 'You find it relatively easy to stay relaxed under pressure.',
    type: 'prospecting'
  },
  {
    question: 'Your productivity tends to be based more on random bursts of energy than a systematic and planned routine.',
    type: 'prospecting'
  },
  {
    question: 'You often procrastinate until there is no time to get things done on time.',
    type: 'prospecting'
  },
  {
    question: 'Your travel plans are usually well thought-out in advance.',
    type: 'judging'
  }, {
    question: 'You are rarely late to meetings.',
    type: 'judging'
  },
  {
    question: 'You do not have much trouble making a to-do list and sticking to it.',
    type: 'judging'
  },
  {
    question: 'Your work and living spaces are relatively neat and organized.',
    type: 'judging'
  },
]

function shuffle (array) {
  var i = 0,
  j = 0,
  temp = null;
  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array;
}

var shuffledQuestions = shuffle(questions)

export default shuffledQuestions;
