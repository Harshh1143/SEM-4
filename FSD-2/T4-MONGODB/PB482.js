const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/PB482");
const mySchema = new mg.Schema({
  name: String,
  category: String,
  price: Number,
  rating: Number,
});

const mymodel = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const products = [
      { name: "Laptop", category: "Electronics", price: 70000, rating: 4.5 },
      { name: "Mobile", category: "Electronics", price: 30000, rating: 4.2 },
      { name: "Chair", category: "Furniture", price: 5000, rating: 3.8 },
    ];
    await mymodel.insertMany(products);
    await mymodel.collection.createIndex({ category: 1, price: 1 });
    const result = await mymodel
      .find({ category: "Electronics", price: { $lt: 60000 } })
      .explain("executionStats");
    console.log(
      "Execution Stage :",
      result.executionStats.executionStages.stage,
    );
    console.log("nReturned :", result.executionStats.nReturned);
    console.log("totalDocsExamined :", result.executionStats.totalDocsExamined);
  } catch (err) {
    console.log(err);
  }
};
insert();
