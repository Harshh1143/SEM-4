const expr = require("express");
const mg = require("mongoose");
const app = expr();

mg.pluralize(null);

mg.connect("mongodb://127.0.0.1:27017/PB462")
  .then(() => console.log("Conneccted to db"))
  .catch((err) => console.log(err));

const mySchema = new mg.Schema({
  _id: Number,
  name: String,
  surname: String,
  age: Number,
});

const student = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = [
      { _id: 123433, name: "2DD", surname: "GGG", age: 22 },
      { _id: 123434, name: "LLL", surname: "RRR", age: 2 },
      { _id: 123435, name: "KKK", surname: "III", age: 32 },
      { _id: 123436, name: "ZZZ", surname: "TTTT", age: 9 },
    ];

    // const result = await student.insertMany(data);
    // console.log(result);

    // List all students whose name starts by digit only.
    const res1 = await student.find({
      name: { $regex: /^[0-9]/ },
    });
    console.log("Q1",res1);
    // (2) Students whose surname has exactly 4 letters
    const res2 = await student.find({
      surname: { $regex: /^[A-Aa-z]{4}$/ },
    });
    console.log("Q2",res2);

    // (3) Display only names from youngest to oldest
    const res3 = await student.find({}, { _id: 0, name: 1 }).sort({ age: 1 });
    console.log("Q3",res3);

    // (4) Students whose name has 3-10 letters only
    // No digits or underscore allowed
    const res4 = await student.find({
        name: {$regex:/^[A-Aa-z]{3,10}$/}
    })
    console.log("Q4",res4)

  } catch (err) {
    console.log(err.message);
  }
};
insert();
