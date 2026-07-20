import { useState } from "react";
import axios from "axios";

export default function PB469() {
  const [name, setName] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/signup", { username: name });
      alert("User signed up", name);
      setName("");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <h1>Signup form</h1>
      <form onSubmit={handleSignup} method="post">
        Name :{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
