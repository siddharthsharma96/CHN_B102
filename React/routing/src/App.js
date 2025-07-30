import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App a">
      <header>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About US</NavLink>
        <NavLink to={"/Search"}>Search</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      </header>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
