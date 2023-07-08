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
    const data = await list();
    setItems(data);
    setIsLoading(false);
  }

  function changeInputValue(value) {
    setInputValue(value);
  }  

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      <div className="head">
        <Button type={"list"}></Button>
      </div>
      <div className="body">
        <div className="todo">
          <Textfield onInputValueChange={changeInputValue}></Textfield>
          <Button type={"add"} inputValue={inputValue}></Button>
        </div>

        <div className="todo-list">
          {!isLoading && items.map((item, index) => (
            <Todo key={index} task={item.task}></Todo>
          ))}
        </div>
        <div className="todo-background">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
