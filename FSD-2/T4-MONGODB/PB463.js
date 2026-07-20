const expr = require("express");
const mg = require("mongoose");
const app = expr();

mg.pluralize(null);

mg.connect("mongodb://127.0.0.1:27017/PB463")
  .then(() => console.log("Connected Successfully"))
  .catch((err) => console.log(err));

const mySchema = new mg.Schema({
  name: String,
  surname: String,
  age: Number,
  active: Boolean,
});

const student = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    data = [
      { name: "ABC", surname: "PQR", age: 30, active: true },
      { name: "DEF", surname: "STU", age: 10, active: true },
      { name: "GHI", surname: "SWX", age: -2, active: false },
      { name: "JKL", surname: "WZ", age: 100, active: true },
    ];
    const result = await student.insertMany(data);
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
};
insert();
