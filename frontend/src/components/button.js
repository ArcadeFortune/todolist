import add from '../functions/add.js'
import list from '../functions/list.js'
import remove from '../functions/remove.js'

export default function Button({type, inputValue}) {
  async function handleClick(command) {
    switch (command) {
      case "add":
        add(inputValue);
        break;
      case "list":
        list();
        break;
      case "remove":
        remove(inputValue);
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