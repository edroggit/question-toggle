import Questions2 from "./Questions2";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// randomising position of questions on page

function randomiser(questions) {
  let numberOfQuestions = questions.length;
  let questionSelection = Math.floor(Math.random() * numberOfQuestions);

  let answers = questions[questionSelection].answersSet;
  const newAnswers = [];
  let newQuestion = questions[questionSelection].question;

  for (let i = 0; i < answers.length; i++) {
    let content = questions[questionSelection].answersSet[i];
    let shuffledContent = shuffle(content);
    newAnswers.push(shuffledContent);
  }
  return { newQuestion, newAnswers };
}

let randomisedQuestions = randomiser(Questions2);

export default randomisedQuestions;
