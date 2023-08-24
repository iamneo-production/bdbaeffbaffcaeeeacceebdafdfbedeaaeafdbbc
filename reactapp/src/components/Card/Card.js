import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ResultButton from "../Button/ResultButton";
function Card({ questions, setActiveIndex, getResult }) {
  const [score, setScore] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    getResult(score);
  }, [score, getResult]);

  return (
    <div>
      {questions.map((qns, index) => (
        <Banner
          setScore={setScore}
          setCompletedCount={setCompletedCount}
          key={index}
          qns={qns}
        />
      ))}
      {questions.length === completedCount && (
        <ResultButton setActiveIndex={setActiveIndex} />
      )}
    </div>
  );
}

export default Card;
