const expr = require("express");
const mg = require("mongoose");
var app = expr();

app.use(expr.static(__dirname,{index:'PB456.html'}))

app.use(expr.urlencoded({ extended: true }));

mg.connect("mongodb://127.0.0.1:27017/PB456")
  .then(() => console.log("Succesfull"))
  .catch((err) => console.log(err));

mg.pluralize(null);

const mySchema = new mg.Schema({
  name: String,
  age: Number,
  city: String,
});

const Student = mg.model("Student", mySchema);
app.use(expr.json());

app.post("/insert", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
    });
    await student.save();
    res.send("Record updated sucessfully");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000,()=>{
    console.log("Running on port 3000")
})