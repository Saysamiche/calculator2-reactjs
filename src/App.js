import { useState } from "react";
import "./App.css";
import CalculatorBody from "./Components/CalculatorBody";
import DisplayResult from "./Components/DisplayResult";
import * as math from "mathjs";

const App = () => {
  const [getResult, setGetResult] = useState("");
  const [result, setResult] = useState("");

  const addCharacters = (theValues) => {
    setGetResult((getResult) => [...getResult, theValues + ""]);
  };

  const clearDisplay = () => {
    setGetResult("");
    setResult("");
  };

  const deleteDisplay = () => {
    setGetResult(getResult.slice(0, -1));
  };

  const getAnswer = () => {
    const display = getResult.join("");
    setResult(math.evaluate(display));
  };

  const operatorColor = "orange";
  const cancelColor = "grey";
  return (
    <div className="App">
      <div className="project-body">
        <div className="project-main-body">
          <div className="display">
            <DisplayResult getResult={getResult} result={result} />
          </div>

          <div className="project-chracters">
            <CalculatorBody
              characters="AC"
              color={cancelColor}
              eventHandler={clearDisplay}
            />
            <CalculatorBody
              characters="DE"
              color={cancelColor}
              eventHandler={deleteDisplay}
            />
            <CalculatorBody
              characters="%"
              color={cancelColor}
              eventHandler={addCharacters}
            />
            <CalculatorBody
              characters="!"
              color={cancelColor}
              eventHandler={addCharacters}
            />
          </div>

          <div className="project-chracters">
            <CalculatorBody characters="7" eventHandler={addCharacters} />
            <CalculatorBody characters="8" eventHandler={addCharacters} />
            <CalculatorBody characters="9" eventHandler={addCharacters} />
            <CalculatorBody
              characters="+"
              color={operatorColor}
              eventHandler={addCharacters}
            />
          </div>

          <div className="project-chracters">
            <CalculatorBody characters="4" eventHandler={addCharacters} />
            <CalculatorBody characters="5" eventHandler={addCharacters} />
            <CalculatorBody characters="6" eventHandler={addCharacters} />
            <CalculatorBody
              characters="-"
              color={operatorColor}
              eventHandler={addCharacters}
            />
          </div>

          <div className="project-chracters">
            <CalculatorBody characters="1" eventHandler={addCharacters} />
            <CalculatorBody characters="2" eventHandler={addCharacters} />
            <CalculatorBody characters="3" eventHandler={addCharacters} />
            <CalculatorBody
              characters="/"
              color={operatorColor}
              eventHandler={addCharacters}
            />
          </div>

          <div className="project-chracters">
            <CalculatorBody characters="(" eventHandler={addCharacters} />
            <CalculatorBody characters=")" eventHandler={addCharacters} />
            <CalculatorBody characters="^" eventHandler={addCharacters} />
            <CalculatorBody
              characters="*"
              color={operatorColor}
              eventHandler={addCharacters}
            />
          </div>

          <div className="project-chracters">
            <CalculatorBody characters="0" eventHandler={addCharacters} />
            <CalculatorBody characters="00" eventHandler={addCharacters} />
            <CalculatorBody characters="." eventHandler={addCharacters} />
            <CalculatorBody
              characters="="
              color={operatorColor}
              eventHandler={getAnswer}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
