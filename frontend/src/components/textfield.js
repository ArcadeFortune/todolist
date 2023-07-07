import React, { useState } from "react";
import add from "../functions/add.js";
import "../Styles/components.css";

function Textfield({onInputValueChange}) {

  const handleInputChange = (event) => {
    onInputValueChange(event.target.value)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      add(event.target.value);
    }
  };

  return (
    <input
      className="textfield"
      type="text"
      placeholder="New Task"
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default Textfield;
