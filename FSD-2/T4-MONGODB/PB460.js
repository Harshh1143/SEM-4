const mg = require("mongoose");
const expr = require("express");
var app = expr();
mg.connect("mongodb://127.0.0.1:27017/PB460")
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

const mySchema = new mg.Schema({
  _id: Number,
  name: String,
  age: Number,
});

const Student = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = [
      { _id: 123433, name: "SSS", age: 22 },
      { _id: 123434, name: "YYY", age: 2 },
      { _id: 123435, name: "PPP", age: 32 },
    ];

    // const result = await Student.insertMany(data);
    // console.log(result);

    // 1. Update name="JJJ" and age=40 where age=20.
    // Insert new document if not found.
    const res1 = await Student.updateMany({age:20},{$set:{name:"JJJ",age:40}},{upsert:true});
    console.log(res1)

    // 2. Retrieve age and name of YYY & SSS without _id
    const res2 = await Student.find({name:{$in:["YYY,SSS"]}},{_id:0,name:1,age:1})
    console.log(res2)

    
  } catch (e) {
    console.log(e);
  }
};
insert();
