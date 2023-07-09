import { useContext } from 'react';
import TaskContext from '../taskManager.js';

export default function Button({type, inputValue, clearInputValue}) {
  const { listTasks, removeTask, addTask } = useContext(TaskContext);

  if (type === "add")  return (
      <button className={type} onClick={async () => {await addTask(inputValue); clearInputValue()}}>Add</button>
  );
  if (type === "list")  return (
      <button className={type} onClick={async () => {await listTasks()}}>List</button>
  );  
  if (type === "remove")  return (
    <div className={type} onClick={async () => {await removeTask(inputValue);}}>🗑️</div>
  );
  
  if (type === "")  return (
    <div>something went wrong, the button type is unknown</div>
  );
  return (
    <div>something went wrong, this button does not exist</div>
  )
}