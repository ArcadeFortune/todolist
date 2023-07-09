import React, { useState } from "react";
import useTaskManager from '../hooks/useTaskManager.js';
import "../Styles/components.css";

function Textfield({inputValue, onInputValueChange, clearInputValue}) {
  const { addTask } = useTaskManager();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask(event.target.value);
      clearInputValue();
    }
  };

  return (
    <input
      value={inputValue}
      className="textfield"
      type="text"
      placeholder="New Task"
      onChange={(event) => onInputValueChange(event.target.value)}
      onKeyPress={handleKeyPress}
    />
  );
}

export default Textfield;
