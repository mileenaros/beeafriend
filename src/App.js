import './App.css';
import NavBar from "./NavBar.js";
import Menu from "./Menu.js";
import { useState } from "react";


function App() {
  let [plants, setPlants] = useState([]);

  return (
    <div className="App">
      {/* options menu */}
      <Menu />

      {/* content */}
      {/* <p>Your bee garden is empty! Let's start by adding some plants...</p> */}
      <Map />
      {/* navigation bar */}
      <NavBar />
    </div>
  );
}

export default App;
