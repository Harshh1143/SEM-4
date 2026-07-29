// Write a program to build React app to perform the tasks as asked below:
// 1) 	Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
// 2) 	Add heading “Hello” in red color(initial) and also add “Good Morning” text in h2
// tag.
// 3) 	By clicking on “Change text” button text should be changed to “Welcome” and vice
// versa.
// 4) 	By clicking on “Change Color” button change color of text to “blue” and vice versa.
// This color change should be performed while double clicking on the button.
// 5) 	Initially button text should be “Hide”. While clicking on it the button text should be
// changed to “Show” and text “Good Morning” will not be shown.

import { useState } from "react"


export default function P24() {
    const [hide,setHide] = useState(true)
    const [change,setChange] = useState(false)
    const [color11,setColor] = useState(true)
    let color1 = color11 ? "red" : "blue"
    let mssg = !hide ? "" : change ? "Welcome" : 'Hello Good Morning' 
  return (
    <div>
        <h2 style={{color:color1}}>{mssg}</h2>
        <button onClick={()=>setChange(!change)}>Change Text</button>
        <br />
        <button onDoubleClick={()=>setColor(!color11)}>Change Color</button> <br />
        <button onClick={()=>setHide(!hide)}>{hide ? "Show" : "Hide" }</button> <br />
    </div>
  )
}
