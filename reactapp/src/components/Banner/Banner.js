import React, { useState } from "react";
import "./Banner.css";
const Banner = ({ qns, setScore, setCompletedCount }) => {
  const [isSelected, setisSelected] = useState(false);

  const onButtonClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
      setScore((p) => p + 1);
    }
    setCompletedCount((p) => p + 1);
    setisSelected(true);
  };

  return (
    <div className="qns-banner">
      <h3>{qns.qnsText}</h3>
      <div className="ans-btn">
        {qns.ansOptions.map((option, index) => (
          <button
            key={index}
            disabled={isSelected}
            onClick={() => onButtonClick(option)}
          >
            {option.ansText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
