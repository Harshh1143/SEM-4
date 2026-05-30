import { useState } from "react";
import "./ustask10.css";

export default function Ustask10() {
  const [data, setdata] = useState({});

  const hf = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      alert(`Welcome ${data.email || "user"}`);
    } else {
      alert("Passwords must be same!");
    }
  };

  return (
    <div className="ustask10Container">
      <div className="ustask10Content">
        <div className="ustask10Intro">
          <span className="ustask10Badge">Task 10</span>
          <h1 className="ustask10Title">Create Account</h1>
          <p className="ustask10Subtitle">Enter your email and password to continue.</p>
        </div>

        <div className="ustask10FormContainer">
          <form className="ustask10Form" onSubmit={handleSubmit}>
            <div className="ustask10FormGroup">
              <label className="ustask10Label" htmlFor="task10Email">Email</label>
              <input
                id="task10Email"
                type="email"
                name="email"
                className="ustask10Input"
                onChange={hf}
                value={data.email || ""}
                placeholder="Enter email"
                required
              />
            </div>

            <div className="ustask10FormGroup">
              <label className="ustask10Label" htmlFor="task10Password">Password</label>
              <input
                id="task10Password"
                type="password"
                name="password"
                className="ustask10Input"
                onChange={hf}
                value={data.password || ""}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="ustask10FormGroup">
              <label className="ustask10Label" htmlFor="task10ConfirmPassword">
                Confirm Password
              </label>
              <input
                id="task10ConfirmPassword"
                type="password"
                name="confirmPassword"
                className="ustask10Input"
                onChange={hf}
                value={data.confirmPassword || ""}
                placeholder="Confirm password"
                required
              />
            </div>

            <div className="ustask10ButtonGroup">
              <button type="submit" className="ustask10Button ustask10ButtonSubmit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
