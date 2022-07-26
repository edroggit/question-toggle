import React from "react";
import { PropTypes } from "prop-types";

function AnswerToggle({ label, questions, id, realHandleClick, validation }) {
  return (
    <div
      className={
        validation == true
          ? "toggle-switch true-toggle-switch"
          : "toggle-switch"
      }
    >
      <input
        type="checkbox"
        className="checkbox"
        name={label}
        id={label}
        onClick={() => realHandleClick(id)}
      />
      <label className="label" htmlFor={label}>
        <span className="inner"></span>
        <div className="left-box">
          <h1 className="left-text">{questions[0].answer}</h1>
        </div>
        <div className="right-box">
          <h1 className="right-text">{questions[1].answer}</h1>
        </div>
        <span
          className={validation == true ? "switch true-switch" : "switch"}
        />
      </label>
    </div>
  );
}

AnswerToggle.propTypes = {
  label: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  realHandleClick: PropTypes.func.isRequired,
  validation: PropTypes.bool.isRequired,
};

export default AnswerToggle;
