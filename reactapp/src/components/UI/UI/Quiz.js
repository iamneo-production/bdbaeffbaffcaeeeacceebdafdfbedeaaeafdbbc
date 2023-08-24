import React, { useContext } from "react";
import Card from "../Card/Card";
import { qnsContext } from "../../App";

function Quiz({ setActiveIndex, getResult }) {
  const questions = useContext(qnsContext);
  return (
    <div>
      <Card
        setActiveIndex={setActiveIndex}
        questions={questions}
        getResult={getResult}
      />
    </div>
  );
}

export default Quiz;
