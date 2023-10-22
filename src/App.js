import "./App.css";
import React from "react";
import ColorPicker from "./component/ColorPicker";
function App() {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "black",
    "white",
    "plum",
    "gray",
    "orange",
    "greenyellow",
  ];
  return (
    <div className="App">
      <ColorPicker colors={colors} />{" "}
    </div>
  );
}

export default App;
