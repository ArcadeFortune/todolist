import Button from "./button.js";
export default function Todo({ task }) {
  return (
    <div className="todo-row">    
      <div className="todo-item">{task.task}</div>
      <Button type={"delete"} inputValue={task._id}></Button>
    </div>
  );
}
