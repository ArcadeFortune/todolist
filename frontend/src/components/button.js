import add from '../functions/add.js'
import list from '../functions/list.js'

export default function Button({type, inputValue}) {
  if (type === "add")  return (
      <button className={type} onClick={() => {add(inputValue)}}>Add</button>
  );
  if (type === "list")  return (
      <button className={type} onClick={() => {list()}}>List</button>
  );
  return (
    <button>
      test
    </button>
  )
}