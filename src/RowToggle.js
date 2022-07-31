import React from "react";
import { PropTypes } from "prop-types";

function RowToggle({ rowButton, setRowButton }) {
  return (
    <div className="single-toggle-container row-toggle-container">
      <button
        className="single-toggle row-toggle"
        onClick={() => {
          setRowButton(!rowButton);
        }}
      >
        <div
          className={
            rowButton
              ? "toggle-text row-text"
              : "toggle-text row-text active-text"
          }
        >
          hello
        </div>
        <div
          className={
            rowButton
              ? "toggle-text row-text active-text"
              : "toggle-text row-text"
          }
        >
          Bye
        </div>
        <div
          className={
            rowButton ? "slider row-slider active-row" : "slider row-slider"
          }
        ></div>
      </button>
    </div>
  );
}

RowToggle.propTypes = {
  rowButton: PropTypes.bool.isRequired,
  setRowButton: PropTypes.func.isRequired,
};

export default RowToggle;
