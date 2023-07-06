export default function Button(type) {
  if (type === "add")  return (
    <div className="button">
      <button className="button" onClick={() => {alert('adfs')}}>Click Me!</button>
    </div>
  );
  return (
    <button>
      test
    </button>
  )
}