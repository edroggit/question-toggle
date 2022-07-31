import React from "react";
import { PropTypes } from "prop-types";

function Toggle({ question, id, button, handleClick }) {
  let buttonToggle = button[id];
  return (
    <div className="single-toggle-container">
      <button className="single-toggle" id={id} onClick={() => handleClick(id)}>
        <div
          className={
            buttonToggle === 0 ? "toggle-text active-text" : "toggle-text"
          }
        >
          {question[0].answer}
        </div>
        <div
          className={
            buttonToggle === 1 ? "toggle-text active-text" : "toggle-text"
          }
        >
          {question[1].answer}
        </div>
        <div className={buttonToggle === 1 ? "slider active" : "slider"}></div>
      </button>
    </div>
  );
}

Toggle.propTypes = {
  question: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  button: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Toggle;
