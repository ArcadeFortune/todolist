import Button from "./button.js";
export default function Todo({ task }) {
  return (
    <div className="todo-row">
    
      <div className="todo-item">{task}</div>
      <Button type={"delete"}></Button>
    </div>
  );
}
