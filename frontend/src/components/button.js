import add from '../functions/add.js'
export default function Button({type, inputValue}) {
  if (type === "add")  return (
    <div className="button">
      <button className={type} onClick={() => {add(inputValue)}}>Add</button>
    </div>
  );
  return (
    <button>
      test
    </button>
  )
}