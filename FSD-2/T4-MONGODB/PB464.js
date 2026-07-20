const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB464");

const myschema = new mg.Schema({
  _id: Number,
  name: String,
  age: Number,
});

const mymodel = mg.model("student", myschema);

const insert = async () => {
  try {
    const data = [
      { _id: 123433, name: "DDD", age: 32 },
      { _id: 123434, name: "BBB", age: 20 },
      { _id: 123435, name: "AAA", age: 10 },
    ];

    // await mymodel.insertMany(data);

    //  Create an index & fire a command to retrieve a document having
    // age>15 and name is "BBB". Stats must return values nReturned=1,
    // docExamined=1, stage="IXSCAN". Perform required indexing
    await mymodel.collection.createIndex({ age: 1, name: 1 });
    const res1 = await mymodel
      .find({
        age: { $gt: 15 },
        name: "BBB",
      })
      .explain("executionStats");
    console.log("Q1", res1);
    console.log(res1.queryPlanner.winningPlan);

    //Create an index on subset of a collection having age>30. Also
    //write a command to get a stats "IXSCAN" for age>30.
    await mymodel.collection.createIndex(
      { age: 1 },
      { partialFilterExpression: { age: { $gt: 30 } } },
    );
    const res2 = await mymodel
      .find({ age: { $gt: 30 } })
      .explain("executionStats");
    console.log("Q2", res2);
    console.log(res2.executionStats);
  } catch (err) {
    console.log(err);
  }
};
insert();
