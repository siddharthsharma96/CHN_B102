import "./App.css";
import { useState } from "react";
import Counter from "./Counter";
import Para from "./Para";

function App() {
  // let val = 10;
  // val= variable
  // setVal=Function to update variable value ,setVal
  let [val, setVal] = useState(10);
  const handleIncrement = () => {
    setVal(val + 1);
    console.log("Inc Button CLicked", val);
  };
  const handleDecrement = () => {
    setVal(val - 1);

    console.log("Dec Button CLicked", val);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        val={val}
      ></Counter>
      <Para cnt={"Hello World"} cls={"value"}></Para>
    </div>
  );
}

export default App;
