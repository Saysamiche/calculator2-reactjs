import React from "react";
import "./DisplayResult.css";

const DisplayResult = ({getResult, result}) => {
  return (
  <div className="display-screen">
    <div className="result">{result}</div>
    <div className="getresult">{getResult}</div>
  </div>
);
};

export default DisplayResult;
