const expr = require("express");
const app = expr();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB477");

const mySchema = new mg.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 10,
    lowercase: true,
  },
  age: { type: Number, min: 0 },
  gender: { type: String, enum: ["MALE", "FEMALE"] },
  email: { type: String, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
});

const mymodel = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = {
      name: "  Harsh  ",
      age: 20,
      gender: "MALE",
      email: "harsh@gmail.com",
    };
    await mymodel.insertMany(data)
  } catch (err) {
    console.log(err);
  }
};
insert()