import "./App.css";
import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import Para from "./Para";
import Debouncing from "./Debouncing";

function App() {
  let [val, setVal] = useState(0);
  const refVal = useRef();
  const handleIncrement = () => {
    setVal(val + 1);
  };
  const handleDecrement = () => {
    setVal(val - 1);
  };

  // 3 cases
  // 2 arguments 1. Callback Function 2. array of dependencies
  // 1. case: Callback Function with empty array it will run only 1 time at the time of rendering
  // 2.case callback with some array of depenceies(state variables) it will run for 1st
  // time and whenever depency values changes
  // 3.case callback function without array of dependcies
  // run 1st time and whenevr in my component any state or varible is updating
  useEffect(() => {
    console.log(refVal.current);

    if (val < 0) {
      refVal.current.style.color = "red";
      let timer = setTimeout(() => {
        setVal(0);
      }, 2000);

      // cleanup FUnction
      return () => {
        clearTimeout(timer);
      };
    } else {
      refVal.current.style.color = "green";
    }
  }, [val]);
  return (
    <div className="App">
      {/* <Debouncing></Debouncing> */}
      <h1>Counter App</h1>
      <Counter
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        val={val}
        refVal={refVal}
      ></Counter>
      <Para cnt={"Hello World"} cls={"value"}></Para>
      <img src="/assests/as.png" height={"300px"}></img>
    </div>
  );
}

export default App;
