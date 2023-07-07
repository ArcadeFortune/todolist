import React, { useState } from "react";
import Button from "./components/button";
import Textfield from "./components/textfield";
import logo from "./logo.svg";
import "./Styles/App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  function changeInputValue(value) {
    setInputValue(value);
  }
  
  return (
    <div className="Main">
      <div className="head">
        <button>adfs</button>
      </div>
      <div className="body">
        <div className="todo">
          <Textfield onInputValueChange={changeInputValue}></Textfield>
          <Button type={'add'} inputValue={inputValue}></Button>
        </div>

        <div className="todo-list">

        </div>

        <div className="todo-background">
          <img src={logo} className="logo" alt="logo" />
        </div>

      </div>

    </div>
  );
}

export default App;
