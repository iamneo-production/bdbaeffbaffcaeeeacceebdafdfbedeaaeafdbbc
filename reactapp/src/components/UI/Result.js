import React from "react";
import StartButton from "../Button/StartButton";

import "./Result.css";
function Result({ result, setActiveIndex }) {
  return (
    <div className="result-page">
      <h3>You have answered {result} / 5 Correctly</h3>
      <StartButton setActiveIndex={setActiveIndex}></StartButton>
    </div>
  );
}

export default Result;
