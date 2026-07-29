// Basic To-Do List with MongoDB Integration
// Create a React component for the task management application. This component should
// have the following functionality:
// 1. 	Display a list of tasks.
// 2. 	Provide an input field to add new tasks.
// 3. 	Implement a button to mark a task as completed or incomplete (toggle the
// completion status).
// 4. 	Display buttons or links to filter tasks by "All," "Completed," and "Incomplete."
// 5. 	Insert all these task details into mongoDb table named tasklist inside database
// named Task

const express = require("express");
const mg = require("mongoose");
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.urlencoded())
mg.connect("mongodb://127.0.0.1:27017/Task");

const mySchema = mg.Schema({
  task: String,
  completed: Boolean,
});

const Task = mg.model("tasklist", mySchema);

app.post("/tasks", async (req, res) => {
  try {
    const newTask = new Task({
      task: req.body.task,
      completed: false,
    });
    await newTask.save();
    res.send("Task added");
  } catch (err) {
    res.send(err);
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (err) {
    res.send(err);
  }
});

app.post("/tasks/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);

  await Task.findByIdAndUpdate(req.params.id, { completed: !task.completed });
  res.send("Task updated");
});

app.listen(5000);
