import "./App.css";
import React, { useState } from "react";
import Start from "./components/UI/Start";
import Quiz from "./components/UI/Quiz";
import Result from "./components/UI/Result";
export const qnsContext = React.createContext();

function App() {
  const questions = [
    {
      qnsText: "Who is the father of our nation ?",
      ansOptions: [
        { ansText: "Mahatma Gandhi", isCorrect: true },
        { ansText: "Jawaharlal Nehru", isCorrect: false },
        { ansText: "Donald Trump", isCorrect: false },
        { ansText: "Barrack Obama", isCorrect: false },
      ],
    },
    {
      qnsText: "What color is are the leaves ?",
      ansOptions: [
        { ansText: "Blue", isCorrect: false },
        { ansText: "Red", isCorrect: false },
        { ansText: "Yellow", isCorrect: false },
        { ansText: "Green", isCorrect: true },
      ],
    },
    {
      qnsText: "What color is the sky ?",
      ansOptions: [
        { ansText: "Blue", isCorrect: true },
        { ansText: "Red", isCorrect: false },
        { ansText: "Yellow", isCorrect: false },
        { ansText: "Green", isCorrect: false },
      ],
    },
    {
      qnsText: "What color is the sky ?",
      ansOptions: [
        { ansText: "Blue", isCorrect: true },
        { ansText: "Red", isCorrect: false },
        { ansText: "Yellow", isCorrect: false },
        { ansText: "Green", isCorrect: false },
      ],
    },
    {
      qnsText: "What color is the fire ?",
      ansOptions: [
        { ansText: "Blue", isCorrect: false },
        { ansText: "Red", isCorrect: true },
        { ansText: "Yellow", isCorrect: false },
        { ansText: "Green", isCorrect: false },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [result, getResult] = useState(0);
  const getActiveComponent = () => {
    switch (activeIndex) {
      case 0:
        return <Start setActiveIndex={setActiveIndex} />;
      case 1:
        return <Quiz setActiveIndex={setActiveIndex} getResult={getResult} />;
      case 2:
        return <Result setActiveIndex={setActiveIndex} result={result} />;
      default:
        return null;
    }
  };
  return (
    <qnsContext.Provider value={questions}>
      <div className="App">
        <h1>Quizz App</h1>
        {getActiveComponent()}
      </div>
    </qnsContext.Provider>
  );
}

export default App;
