import React from "react";
import { useState } from "react";
import "../App.css";
import randomisedQuestions from "./QuestionRandomiser";
import AnswerToggle from "./AnswerToggle";
import { SideFunctions } from "./SideFunctions";

function ToggleSwitch() {
  // make initial array dynamic so you can track state of as many questions as you are given
  let newRandomisedQuestions = randomisedQuestions.newAnswers;
  let initialArray = new Array(newRandomisedQuestions.length).fill(0);
  const [realArrayClicked, setRealArrayClicked] = useState(initialArray);
  const [validation, setValidation] = useState(false);
  // track position of correct answers
  const truthPosition = [];
  for (let i = 0; i < newRandomisedQuestions.length; i++) {
    if (newRandomisedQuestions[i][0].value === "true") {
      truthPosition.push(0);
    } else {
      truthPosition.push(1);
    }
  }
  // return state of toggles - have chosen 1 & 0 over true or false just so it's comparable with truthPosition
  const realHandleClick = (i) => {
    setRealArrayClicked((prevState) => {
      const clicked = [...prevState];
      if (clicked[i] === 0) {
        clicked[i] = 1;
      } else {
        clicked[i] = 0;
      }
      let arrayComparison = SideFunctions.areEqual(clicked, truthPosition);
      setValidation(arrayComparison);
      SideFunctions.pageChange(clicked, truthPosition);

      return clicked;
    });
  };
  // map function so component is dynamic to number of answers for the question

  return (
    <>
      <h1 className="title">{randomisedQuestions.newQuestion}</h1>

      <div
        className={validation == true ? "container all-content" : "container"}
      >
        {newRandomisedQuestions.map((randomQuestion, id) => (
          <div key={id}>
            <AnswerToggle
              label={randomQuestion[0].answer}
              questions={randomQuestion}
              id={id}
              realHandleClick={realHandleClick}
              validation={validation}
            />
            <br />
          </div>
        ))}

        <h1 className="title">The answer is {`${validation}`}</h1>
      </div>
    </>
  );
}

export default ToggleSwitch;
