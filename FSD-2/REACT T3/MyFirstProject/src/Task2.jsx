import { useState } from "react";

export default function Task2() {
  const [isHide, setIsHide] = useState(true);
  const [task, setTask] = useState(true);
  const [text, setText] = useState(true);
  function h1() {
    setIsHide(!isHide);
  }
  
  function h11() {
    setTask(!task);
  }
  function h3() {
    setText(!text);
  }
  const text1 = text ? "LJ UNIVERSITY" : "Welcome students";
  const color = task ? "red" : "blue";
  const text2 = isHide ? "The text is display here" : "";
  const btn = isHide ? "Show" : "Hide";
  return (
    <div>
      <p>{text2}</p>
      <button onClick={h1}>{btn}</button>
        <br></br>
      <button onClick={h3}> Change Text</button>
      <br></br>
      <button onClick={h11}> Change Color</button>
      <h1 style={{ color: color }}>{text1}</h1>
    </div>
  );
}
