import React, { useState, useEffect, useContext } from "react";
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
    ping();
  }, []);
  async function ping() {
    try {
      console.log("pinging...");
      const response = await fetch(`${window._env_.REACT_APP_BACKEND_URL}/tasks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        localStorage.setItem("localStorage", false);
        fetchData();
        console.log("Using database");
      }
    } catch {
      console.log("Using localStorage");
      fetchData();
    }
  }
  

  return (
    <div className="Main">
      <div className="head">
        <h1 className="title">Todo List</h1>
        <span>by ArcadeFortune</span>
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
