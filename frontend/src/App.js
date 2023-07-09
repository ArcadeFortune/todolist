import React, { useState, useEffect } from "react";
import useTaskManager from "./hooks/useTaskManager";
import Button from "./components/button";
import Textfield from "./components/textfield";
import Todo from "./components/todo";
import logo from "./logo.svg";
import "./Styles/App.css";

function App() {
  const { updateTasks, getTasks } = useTaskManager();
  const [items, setItems] = useState();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
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

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="Main">
      <div className="head">
        <Button type={"list"}></Button>
      </div>
      <div className="body">
        <button onClick={async () => await updateTasks()}>sdf</button>
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
            getTasks().map((item) => <Todo key={item._id} task={item}></Todo>)}
        </div>
        <div className="todo-background">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
