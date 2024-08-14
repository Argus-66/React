import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  //let counter = 15

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("value added!", counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log("value removed!", counter);
    }
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
