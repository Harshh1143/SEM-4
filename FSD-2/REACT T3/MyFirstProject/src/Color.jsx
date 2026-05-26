import { useState } from 'react'
import bg from './assets/bg.jpeg'
import imgs from './assets/images.jpeg'
export default function Color() {
    const [style,setStyle] = useState(true)
    const [img,setImg] = useState(true)
    function h1 () {
        setStyle(!style)
    }
    function h2 () {
        setImg(!img)
    }
    const color = style ? "red" : "blue"
    const path = img ? bg : imgs
  return (
    <div>
        <h1 style={{ color: color }}> Font color </h1>
        <button onClick={h1}>Change Color</button>
        <img src={path} alt="Image"></img>
        <button onClick={h2}>Change Image</button>
    </div>
  )
}
