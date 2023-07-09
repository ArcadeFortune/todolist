import React, { useState } from "react";
import add from "../functions/add.js";
import "../Styles/components.css";

function Textfield({inputValue, onInputValueChange, clearInputValue}) {


  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      add(event.target.value);
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
