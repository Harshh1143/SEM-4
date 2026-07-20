const expr = require("express");
const app = expr();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB461")
  .then(() => console.log("Succesfull Connection"))
  .catch((err) => console.log(err));

const mySchema = new mg.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 10,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 100,
    required: true,
  },
  gender: {
    type: String,
    lowercase: true,
    enum: ["male", "female"],
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
});

const student = new mg.model("data1", mySchema);

app.use(expr.static(__dirname, { index: "PB461.html" }));
app.get("/insert", async (req, res) => {
  try {
    const data = new student({
      name: req.query.name,
      age: req.query.age,
      gender: req.query.gender,
      email: req.query.email,
    });
    await data.save();
    res.send("Record sent Sucessfully");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(3000)
