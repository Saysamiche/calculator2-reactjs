import React from "react";
import "./CalculatorBody.css";

const CalculatorBody = ({ characters, color, eventHandler }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="calc-characters"
      onClick={() => eventHandler(characters)}
    >
      {characters}
    </div>
  );
};

export default CalculatorBody;
