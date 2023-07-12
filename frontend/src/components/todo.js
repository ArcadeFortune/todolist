import React, { useState, useRef, useEffect, useContext } from "react";
import TaskContext from '../taskManager.js';
import Button from "./button.js";

export default function Todo({ task }) {
  const { editTask } = useContext(TaskContext);
  const [newContent, setNewContent] = useState(task.task);
  const [isEditing, setIsEditing] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) ) {
        //lets hope to 3.5 this works
        setIsEditing(false);
      }
    }

    if (isEditing) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isEditing]);

  function handeMouseClick(event) {
      setIsEditing(true);
    }
    
    function handleChange(event) {
    setNewContent(event.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      editTask({_id: task._id, task: newContent});
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-row">
      <div className="todo-bundle">
        <input
          ref={menuRef}
          type="text"
          className="todo-item"
          onInput={handleChange}
          onKeyDown={handleKeyPress}
          value={newContent}
          onClick={handeMouseClick}
        />
        {isEditing ? (
          <Button type={"confirm"} inputValue={{_id: task._id, task: newContent}}></Button>
        ) : (
          <Button type={"remove"} inputValue={task._id}></Button>
        )}
      </div>
    </div>
  );
}
