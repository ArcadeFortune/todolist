import add from '../functions/add.js'
import list from '../functions/list.js'
import remove from '../functions/remove.js'

export default function Button({type, inputValue}) {
  if (type === "add")  return (
      <button className={type} onClick={() => {add(inputValue)}}>Add</button>
  );
  if (type === "list")  return (
      <button className={type} onClick={() => {list()}}>List</button>
  );  
  if (type === "delete")  return (
    <div className={type} onClick={() => {remove(inputValue)}}>🗑️</div>
  );
  
  if (type === "")  return (
    <div>something went wrong, the button type is unknown</div>
  );
  return (
    <div>something went wrong, this button does not exist</div>
  )
}