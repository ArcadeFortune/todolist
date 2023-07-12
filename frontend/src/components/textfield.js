import React, { useContext } from "react";
import TaskContext from '../taskManager.js';
import "../Styles/components.css";

function Textfield({inputValue, onInputValueChange, clearInputValue}) {
  const { addTask } = useContext(TaskContext);

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
      onKeyDown={handleKeyPress}
    />
  );
}

export default Textfield;
