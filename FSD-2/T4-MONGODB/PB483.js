const mg = require("mongoose");
mg.pluralize(null);
mg.connect("mongodb://127.0.0.1:27017/PB483");

const mySchema = new mg.Schema({
  name: String,
  category: String,
  price: Number,
  stock: Number,
});
const mymodel = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = [
      { name: "Laptop", category: "Electronics", price: 70000, stock: 10 },
      { name: "Mobile", category: "Electronics", price: 30000, stock: 20 },
      { name: "Chair", category: "Furniture", price: 5000, stock: 50 },
    ];
    await mymodel.insertMany(data);
    await mymodel.collection.createIndex(
      { stock: 1 },
      { partialFilterExpression: { stock: { $gt: 15 } } },
    );

    let result = await mymodel
      .find({ stock: { $gt: 15 } })
      .explain("executionStats");
    console.log(result.executionStats.executionStages.stage);
    console.log(result.executionStats.nReturned);
    console.log(result.executionStats.totalDocsExamined);

    await mymodel.collection.createIndex({ category: 1, price: 1 });
    result = await mymodel
      .find({ category: "Electronics", price: { $lt: 50000 } })
      .explain("executionStats");
    console.log(result.executionStats.executionStages.stage);
    console.log(result.executionStats.nReturned);
    console.log(result.executionStats.totalDocsExamined);
  } catch (err) {
    console.log(err);
  }
};
insert();
