import Questions from "./Questions";
import { SideFunctions } from "./SideFunctions";

// randomly shuffles array

function Shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// finds positions of positions answers are in initially

function AnswerPosition(array) {
  const truthPosition = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0].value === "true") {
      truthPosition.push(0);
    } else {
      truthPosition.push(1);
    }
  }
  return truthPosition;
}

// randomising position of questions on page

function RandomQuestionGenerator(questions) {
  const newAnswers = [];
  let numberOfQuestions = questions.length;
  let questionSelection = Math.floor(Math.random() * numberOfQuestions);
  let answers = questions[questionSelection].answersSet;
  let newQuestion = questions[questionSelection].question;

  for (let i = 0; i < answers.length; i++) {
    let content = questions[questionSelection].answersSet[i];
    let shuffledContent = Shuffle(content);
    newAnswers.push(shuffledContent);
  }

  return { newQuestion, newAnswers };
}

//Tests whether initial position of questions is same as initial position of answers

function Closeness(RandomQuestion) {
  let blankArray = new Array(RandomQuestion.newAnswers.length).fill(0);
  let toggleStartPositions = SideFunctions.initialArray(blankArray);
  let answerPositions = AnswerPosition(RandomQuestion.newAnswers);
  return SideFunctions.areEqual(answerPositions, toggleStartPositions);
}

//Generates new questions if Closeness returns true

function QuestionVerification(question) {
  let RandomQuestion;
  do {
    RandomQuestion = RandomQuestionGenerator(question);
  } while (Closeness(RandomQuestion) === true);
  return RandomQuestion;
}

let RandomQuestion = QuestionVerification(Questions);

export { AnswerPosition, RandomQuestion };
