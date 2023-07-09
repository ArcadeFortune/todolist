import React, { useState, useEffect } from "react";
import list from "./functions/list";
import Button from "./components/button";
import Textfield from "./components/textfield";
import Todo from "./components/todo";
import logo from "./logo.svg";
import "./Styles/App.css";

function App() {
  const [items, setItems] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    let data = await list();
    data.sort((a, b) => {
      return a._id - b._id;
    });
    setItems(data);
    console.log(data);
    setIsLoading(false);
  }

  function changeInputValue(value) {
    setInputValue(value);
  }

  function clearInputValue() {
    setInputValue("");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Main">
      <div className="head">
        <Button type={"list"}></Button>
      </div>
      <div className="body">
        <div className="todo">
          <Textfield
            inputValue={inputValue}
            onInputValueChange={changeInputValue}
            clearInputValue={clearInputValue}
          ></Textfield>
          <Button type={"add"} inputValue={inputValue}></Button>
        </div>

        <div className="todo-list">
          {!isLoading &&
            items.map((item) => <Todo key={item._id} task={item.task}></Todo>)}
        </div>
        <div className="todo-background">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
