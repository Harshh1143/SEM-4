const expr = require("express");
const app = expr();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB470");

const mySchema = new mg.Schema({
  _id: Number,
  name: String,
  age: Number,
});

const student = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = [
      { _id: 123433, name: "DDD", age: 32 },
      { _id: 123434, name: "BBB", age: 20 },
      { _id: 123435, name: "AAA BBB", age: 10 },
    ];
    await student.insertMany(data);

    //Retrieve all records having “BBB” as a substring in name by
    //indexing. Apply required indexing. Predict the values of nReturned &
    // docsExamined properties also.

    await student.collection.createIndex({ name: "text" });
    const res1 = await student
      .find({
        $text: { $search: "BBB" },
      })
      .explain("executionStats");
    console.log("Q1", res1.executionStats);
    console.log(res1);

    //  Create an index and fire a command to retrieve documents having
    //age>15. Stats must return values nReturned=2 & docExamined=2,
    //even though total 3 records are there.

    await student.collection.createIndex({ age: 1 });
    const res2 = await student
      .find({ age: { $gt: 15 } })
      .hint({ age: 1 })
      .explain("executionStats");
  } catch (err) {
    console.log(err);
  }
};
insert();
