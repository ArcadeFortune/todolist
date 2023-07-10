import React, { useState, useRef, useEffect } from "react";
import Button from "./button.js";

export default function Todo({ task }) {
  const [toShowMenu, setToShowMenu] = useState(false);
  const [newContent, setNewContent] = useState(task.task);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        //lets hope to 3.5 this works
        // setToShowMenu(!toShowMenu);
      }
    }

    if (toShowMenu) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toShowMenu]);

  function handeMouseClick(event) {
    setToShowMenu(true);
    console.log("show menu");
  }

  function handleChange(event) {
    setNewContent(event.target.textContent);
  }

  return (
    <div className="todo-row">
      <div className="todo-bundle">
        <div
          className="todo-item"
          onClick={handeMouseClick}
          onInput={handleChange}
          contentEditable={true}
        >
          {newContent}
        </div>
        <Button type={"remove"} inputValue={task._id}></Button>
      </div>

      {toShowMenu && (
        <div ref={menuRef} className="edit">
          <input type="text" placeholder="Enter text" />
        </div>
      )}
    </div>
  );
}
