import { useState } from "react";
export default function Usi() {
  const [count, setCount] = useState(0);
  const h1 = () => {
    setCount(count + 1);
  };
  const h2 = () =>{
    if(count>0) {
        setCount(count-1)
    }
  }
  return (
    <div>
      <button onClick={h1}>Increament</button>
      <br></br>
      <h1>User click {count} three times</h1>
      <button onClick={h2}>Decrement</button>
      
    </div>
  );
}
