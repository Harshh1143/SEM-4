import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function PB480() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [employee, setEmployee] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:3000/employees")
      .then((res) => setEmployee(res.data));
  };
  useEffect(() => {
    loadData();
  }, []);

  const saveData = () => {
    axios
      .post("http://localhost:3000/add", { name, id, salary, department })
      .then(() => {
        loadData();
        setName("");
        setId("");
        setSalary("");
        setDepartment("");
      });
  };

  return (
    <>
      <h2>Employee Form</h2>
      <form onSubmit={saveData}>
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        ID :
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <br />
        Salary :
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />{" "}
        <br />
        Department :
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <h2>Employees</h2>
      <table border="1">
        <tr>
          <td>Name</td>
          <td>ID</td>
          <td>Salary</td>
          <td>Department</td>
        </tr>
        {employee.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.id}</td>
            <td>{e.salary}</td>
            <td>{e.department}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
