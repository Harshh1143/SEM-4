const expr = require("express");
const app = expr();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB468");

app.use(expr.static(__dirname, { index: "form.html" }));
app.use(expr.urlencoded({ extended: true }));

const mySchema = new mg.Schema({
  username: String,
  password: String,
});

const student = new mg.model("data1", mySchema);

app.post("/insert", async (req, res) => {
  try {
    const data = new student({
      username: req.body.name,
      password: req.body.password,
    });
    await data.save();
    res.send("Form data sent successfully");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);
