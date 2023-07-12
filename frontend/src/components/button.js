import { useContext } from 'react';
import TaskContext from '../taskManager.js';

export default function Button({type, inputValue, clearInputValue}) {
  const { listTasks, removeTask, addTask, editTask } = useContext(TaskContext);

  if (type === "add")  return (
      <button className={type} onClick={async () => {await addTask(inputValue); clearInputValue()}}>Add</button>
  );
  if (type === "list")  return (
      <button className={type} onClick={async () => {await listTasks()}}>List</button>
  );
  if (type === "remove")  return (
    <div className={type} onClick={async () => {await removeTask(inputValue);}}>🗑️</div>
  );  
  if (type === "confirm")  return (
    <div className={type} onClick={async () => {await editTask(inputValue);}}>✔</div>
  );

  // beautiful error handling
  if (type === "")  return (
    <div>something went wrong, the button type is unknown</div>
  );
  return (
    <div>a {type} button does not exist</div>
  )
}