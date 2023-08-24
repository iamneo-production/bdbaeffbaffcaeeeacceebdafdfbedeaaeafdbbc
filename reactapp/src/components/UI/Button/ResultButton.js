import React from "react";
import "./ResultButton.css";
function ResultButton({ setActiveIndex }) {
  return (
    <div className="result-btn">
      <button onClick={() => setActiveIndex(2)}>Show Result</button>
    </div>
  );
}

export default ResultButton;
