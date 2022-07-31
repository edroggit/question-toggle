import "./App.css";
import React, { useState } from "react";
import Toggle from "./components/Toggle";
import { SideFunctions } from "./components/SideFunctions";
import { AnswerPosition, RandomQuestion } from "./components/Randomiser";
// import RowToggle from "./RowToggle";

function App() {
  let { newAnswers } = RandomQuestion;
  let blankArray = new Array(newAnswers.length).fill(0);
  let initialArray = SideFunctions.initialArray(blankArray);

  // setting initial state of button to positions of toggles [0,1,0] or [0,1,0,1]
  const [button, setButton] = useState(initialArray);

  // Page validation used to stop anymore clicks once answers are correct and changes text at bottom
  const [pageValidation, setPageValidation] = useState(false);

  // changes background of page if answer is closer to/further from being correct
  const [pageStyle, setPageStyle] = useState("");
  // rowButton is used to track state of row button if uncommented. In practice you would keep track of this using button and just change
  // the style conditionally if you ever wanted to use it.
  // const [rowButton, setRowButton] = useState(false);

  const answerPositions = AnswerPosition(newAnswers);

  // handles change event on click of button. Also checks if the page is validated and then sets the style accordingly
  const handleClick = (i) => {
    setButton((prevState) => {
      const clicked = [...prevState];
      if (clicked[i] === 0) {
        clicked[i] = 1;
      } else {
        clicked[i] = 0;
      }
      setPageValidation(SideFunctions.areEqual(clicked, answerPositions));
      setPageStyle(SideFunctions.pageChange(clicked, answerPositions));
      return clicked;
    });
  };

  return (
    <div className={`complete-page ${pageStyle}`}>
      <div className="container">
        <h1 className="title">{RandomQuestion.newQuestion}</h1>
        <div className="wrapper">
          <div
            className={
              pageValidation === false
                ? "toggles-container"
                : "toggles-container page-lock"
            }
          >
            {newAnswers.map((question, id) => (
              <Toggle
                question={question}
                key={id}
                id={id}
                button={button}
                handleClick={handleClick}
              />
            ))}
            {/* <RowToggle rowButton={rowButton} setRowButton={setRowButton} /> */}
          </div>
        </div>
        <h2 className="title">
          The answer is {pageValidation ? "correct!" : "incorrect"}
        </h2>
      </div>
    </div>
  );
}

export default App;
