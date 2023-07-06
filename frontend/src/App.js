import Button from "./components/button";
import Textfield from "./components/textfield";
import logo from "./logo.svg";
import "./Styles/App.css";

function App() {
  return (
    <div className="Main">
      <div className="header">

      </div>
      
      <div className="todo-background">
        <img src={logo} className="logo" alt="logo" />
        <div className="todo">
          <Textfield></Textfield>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
