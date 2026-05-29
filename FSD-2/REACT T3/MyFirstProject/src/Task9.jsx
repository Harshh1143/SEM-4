//import React from 'react'
import { useState } from "react";
export default function Task9() {
  const [data, setdata] = useState({});
  const hc = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };
  const hf = (e) => {
    e.preventDefault();
    alert(`Welcome ${data.fname}
            ${data.lname}
            ${data.mail}
            ${data.pass}
            ${data.area}
            ${data.Gender}
            ${data.City}`);
  };
  return (
    <div>
      <form onSubmit={hf}>
        FirstName:
        <input type="text" name="fname" onChange={hc} />
        <br></br>
        LastName:
        <input type="text" name="lname" onChange={hc} />
        <br></br>
        Email:
        <input type="email" name="mail" onChange={hc} />
        <br></br>
        Password: <input type="password" name="pass" onChange={hc} />
        <br></br>
        Message:
        <textarea name="area" onChange={hc} />
        <br></br>
        <label>Male</label>
        <input type="radio" name="Gender" value="Male" onChange={hc}></input>
        <label>Female</label>
        <input type="radio" name="Gender" value="Female" onChange={hc}></input>
        <br></br>
        Dropdown:{" "}
        <select name="City" onChange={hc}>
          <option value="Ahmedabad"></option>
          <option value="Anand"></option>
          <option value="Surat"></option>
          <option value="Mumbai"></option>
        </select>
        <input type="submit"></input>
      </form>
    </div>
  )
}
