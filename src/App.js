import './App.css';
import React, {useState} from "react"
import {MultiSelect} from './MultiSelect';

function App() {
  const [selected, setSelected] = useState([]);

  const colorsList = [
    { value: "Red", label: "Red" },
    { value: "Blue", label: "Blue" },
    { value: "Brown", label: "Brown" },
    { value: "Green", label: "Green" },
    { value: "Yellow", label: "Yellow" }
  ];

  return (
    <MultiSelect options={colorsList} value={selected} onChange={setSelected} />
  );
}

export default App;
