import React, { useState } from "react";
import "../Styles/textfield.css";

function Textfield() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert("You typed: " + inputValue);
    }
  };

  return (
    <input
      className="textfield"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
  );
}

export default Textfield;
