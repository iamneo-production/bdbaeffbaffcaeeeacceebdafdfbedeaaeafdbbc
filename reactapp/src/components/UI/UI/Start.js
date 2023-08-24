import React from "react";
import StartButton from "../Button/StartButton";
function Start({ setActiveIndex }) {
  return (
    <div>
      <StartButton setActiveIndex={setActiveIndex}></StartButton>
    </div>
  );
}

export default Start;
