import useTaskManager from '../hooks/useTaskManager.js';

export default function Button({type, inputValue}) {
  const { updateTasks, listTasks, removeTask, addTask } = useTaskManager();
  async function handleClick(command) {
    switch (command) {
      case "add":
        addTask(inputValue);
        break;
      case "list":
        listTasks();
        break;
      case "remove":
        removeTask(inputValue);
        break;
      default:
        console.log('something went wrong, the button type is unknown')
    }
  }
  if (type === "add")  return (
      <button className={type} onClick={async () => {await handleClick("add")}}>Add</button>
  );
  if (type === "list")  return (
      <button className={type} onClick={async () => {await handleClick("list")}}>List</button>
  );  
  if (type === "remove")  return (
    <div className={type} onClick={async () => {await handleClick("remove");}}>🗑️</div>
  );
  
  if (type === "")  return (
    <div>something went wrong, the button type is unknown</div>
  );
  return (
    <div>something went wrong, this button does not exist</div>
  )
}