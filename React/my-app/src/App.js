import "./App.css";
import React from "react";
import Comp1 from "./Comp1";
import GrandFather from "./GrandFather";

function App() {
  let varible = 30;
  let property = 300;
  return (
    <div className="App">
      <h1>Learning React</h1>
      <Comp1 vars={varible} message={"Hello props"}></Comp1>
      <GrandFather property={property}></GrandFather>
    </div>
  );
}

export default App;
