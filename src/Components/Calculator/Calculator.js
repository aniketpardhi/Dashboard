import React from "react";
import "./style.scss";
import { useReducer } from "react";
import Digitbutton from "./Digitbutton";
import { Button } from "@mui/material";
export const ACTION = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose",
  CLEAR: "clear",
  DELET_DIGIT: "delet-digit",
  EVALUATE: "evelaute",
};
function reducer(state, { type, payload }) {
    switch (type) {
      case ACTION.ADD_DIGIT:
        return {
          ...state,
          currentoperand: `${currentoperand || ""}${payload.digit}`,
        };
    }
  }

const Calculator = () => {
  const [{ currentoperand, previousoperand, operation }, dispatch] = useReducer( reducer,{});
 

  return (
    <>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand">{currentoperand}</div>
        </div>
        <button className="span-two">AC</button>
        <button>DEL</button>
       <Digitbutton digit="+" dispatch={dispatch}/>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="span-two">=</button>
      </div>
    </>
  );
};

export default Calculator;
