const expr = require("express");
const app = expr();
const mg = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(expr.json());

const mySchema = new mg.Schema({
  name: String,
  id: String,
  salary: Number,
  department: String,
});
mg.connect("mongodb://127.0.0.1:27017/PB480");

const Employee = mg.model("employees", mySchema);
app.post("/add", async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();
  res.send("Saved");
});
app.get("/employees",async(req , res)=>{
    const data = await Employee.find()
    res.send(data)
})

app.listen(3000)
