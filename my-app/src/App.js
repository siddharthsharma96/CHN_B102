import "./App.css";
import Comp1, { Comp2 } from "./Comp1";
import Comp3 from "./Comp3";
import React from "react";

function App() {
  // 1. Tag Name
  // 2.Atrribute
  // 3. Content
  const Element = React.createElement(
    "h1",
    { className: "asas" },
    "Added by jsx"
  );

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Comp1></Comp1>
      <Comp2></Comp2>
      <Comp3></Comp3>
      {Element}
    </div>
  );
}

export default App;
