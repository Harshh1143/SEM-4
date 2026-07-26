// Sample UseState Hook
// Create react app which contains form with following fields.
// • First Name(Input type text)
// • Email(Input type email)
// • Password(Input type password)
// • Confirm Password(Input type password)
// • Message (Textarea)
// • Gender(Radio Button)
// • City (Dropdown)
// Display submitted values in alert box. (Using useState Hook)


import { useState } from "react";

export default function UseState() {
  const [formdata, setFormdata] = useState({});
  function handleChange(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Your name is ${formdata.name} \n Email is ${formdata.email} \n City is ${formdata.city} \n Gender is ${formdata.gender}`,
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Name : <input type="text" name="name" onChange={handleChange} /> <br />
        Email : <input type="email" name="email" onChange={handleChange} />{" "}
        <br />
        Password :
        <input type="password" name="password" onChange={handleChange} /> <br />
        Confirm Password :
        <input type="password" name="password" onChange={handleChange} /> <br />
        Message : <textarea name="textarea"></textarea> <br />
        Gender : <input type="radio" name="gender" value="male" onChange={handleChange} />
        Male
        <input type="radio" name="gender" value="female" onChange={handleChange}/>
        Female
        <br />
        City :
        <select name="city" onChange={handleChange}>
          <option value="">Select your option</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Godhra">Godhra</option>
          <option value="Gandhinagar">Gandhinagar</option>
        </select>
        <input type="submit" />
        Submit
      </form>
    </div>
  );
}
