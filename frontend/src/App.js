import React, { useState, useEffect, useContext } from "react";
// import useTaskManager from "./hooks/useTaskManager";
import TaskContext from "./taskManager";
import Button from "./components/button";
import Textfield from "./components/textfield";
import Todo from "./components/todo";
import logo from "./logo.svg";
import "./Styles/App.css";

function App() {
  const { items, updateTasks } = useContext(TaskContext);
  const [inputValue, setInputValue] = useState(""); // new task to add
  const [isLoading, setIsLoading] = useState(true); // loading hint

  async function fetchData() {
    setIsLoading(true);
    await updateTasks();
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
          <Button type={"add"} inputValue={inputValue} clearInputValue={clearInputValue}></Button>
        </div>

        <div className="todo-list">
          {!isLoading &&
            items.map((item) => <Todo key={item._id} task={item}></Todo>)}
        </div>
        <div className="todo-background">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
