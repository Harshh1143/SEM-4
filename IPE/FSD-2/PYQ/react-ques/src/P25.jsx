import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function P25() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  async function getTasks() {
    const res = await axios.get("http://localhost:5000/tasks");
    setTasks(res.data);
  }
  useEffect(() => {
    getTasks();
  }, []);
  async function addTask() {
    await axios.post("http://localhost:5000/tasks", { task: task });
    setTask("");
    getTasks();
  }
  async function toggleTask(id) {
    await axios.post(`http://localhost:5000/tasks/${id}`);
    getTasks();
  }
  const filtered = tasks.filter((t) => {
    if (filter === "Completed") return t.completed;
    if (filter === "Incompleted") return !t.completed;
    return true;
  });
  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />{" "}
      <br />
      <button onClick={addTask}>Add Task</button>
      <br />
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Incomplete")}>Incomplete</button>
      {filtered.map((t) => (
        <div key={t._id}>
          {t.task} - {t.completed ? "Completed" : "Incomplete"}
          <button onClick={() => toggleTask(t._id)}>Toggle</button>
        </div>
      ))}
    </div>
  );
}
