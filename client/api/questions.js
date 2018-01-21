var questions = [
  {
    question: 'You often intiate conversations.',
    type: 'extrovert'
  }, {
    question: 'You consider yourself to be relatively open and easy to get to know',
    type: 'extrovert'
  },
  // {
  //   question: 'You do not mind being the center of attention.',
  //   type: 'extrovert'
  // },
  // {
  //   question: 'You tend to feel more energetic after being with a group of people',
  //   type: 'extrovert'
  // },
  // {
  //   question: 'You prefer working alone over working in a group.',
  //   type: 'introvert'
  // },
  // {
  //   question: 'You consider yourself a relatively reserved and quiet person.',
  //   type: 'introvert'
  // },
  // {
  //   question: 'You would typically rather read an interesting book than attend a social event.',
  //   type: 'introvert'
  // }, {
  //   question: 'When in a large group, you often find it difficult to relax',
  //   type: 'introvert'
  // },
  // {
  //   question: 'You frequently do things out of sheer curiousity',
  //   type: 'intuition'
  // },
  // {
  //   question: 'You often find yourself lost in thought',
  //   type: 'intuition'
  // },
  // {
  //   question: 'You ponder the meaning of life more than most people',
  //   type: 'intuition'
  // },
  // {
  //   question: 'You often spend time pondering impractical and unrealistic ideas',
  //   type: 'intuition'
  // },
  // {
  //   question: 'You tend to rely more on your experience than your imagination',
  //   type: 'sensing'
  // }, {
  //   question: 'You tend to get bored reading highly theoretical books',
  //   type: 'sensing'
  // }, {
  //   question: 'You do not consider yourself to be a dreamer',
  //   type: 'sensing'
  // },
  // {
  //   question: 'You consider yourself more practical than creative',
  //   type: 'sensing'
  // },
  // {
  //   question: 'You often find it difficult to relate to other people\'s feelings',
  //   type: 'thinking'
  // },
  // {
  //   question: 'You rarely have mood swings',
  //   type: 'thinking'
  // },
  // {
  //   question: 'In discussions and debates, you usually value truth over people\'s sensitivities',
  //   type: 'thinking'
  // }, {
  //   question: 'You trust reason over feelings.',
  //   type: 'thinking'
  // }, {
  //   question: 'Your actions are frequently influenced by your emotions.',
  //   type: 'feeling'
  // },
  // {
  //   question: 'You often worry about your actions might affect other people',
  //   type: 'feeling'
  // },
  // {
  //   question: 'You often feel as though your emotions control you more than you control them',
  //   type: 'feeling'
  // },
  // {
  //   question: 'You try to follow your heart when making big decisions.',
  //   type: 'feeling'
  // },
  // {
  //   question: 'Having a messy inbox does not particularly bother you.',
  //   type: 'prospecting'
  // },
  // {
  //   question: 'You generally find it easy to stay relaxed under pressure.',
  //   type: 'prospecting'
  // },
  // {
  //   question: 'Your productivity tends to be based more on random bursts of energy than a systematic and planned routine.',
  //   type: 'prospecting'
  // },
  // {
  //   question: 'You often procrastinate until there is no time to get things done on time.',
  //   type: 'prospecting'
  // },
  // {
  //   question: 'You usually have well-organized travel plans',
  //   type: 'judging'
  // }, {
  //   question: 'You are very rarely late to appointments.',
  //   type: 'judging'
  // },
  // {
  //   question: 'You do not have much trouble making personal timetables and sticking to them.',
  //   type: 'judging'
  // },
  // {
  //   question: 'You very rarely procrastinate to the point that there is no time left to complete a project.',
  //   type: 'judging'
  // },
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
