import React, { useState, useContext } from "react";
import { CounterContext } from "./context/Counter";
const Counter = () => {
  const counterContext = useContext(CounterContext);

  const handleChange = () => {
    counterContext.setCount((prev) => prev + 1);
  };
  const handleChange2 = () => {
    counterContext.setCount((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={handleChange}>Incement</button>
      <button onClick={handleChange2}>Decrement</button>
    </div>
  );
};

export default Counter;
