import React from "react";
import "./StartButton.css";
function StartButton({ setActiveIndex }) {
  return (
    <div className="start-container">
      <button className="start-btn" onClick={() => setActiveIndex(1)}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartButton;
