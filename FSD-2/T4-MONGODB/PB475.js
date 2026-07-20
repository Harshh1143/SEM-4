const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/PB475");

const mySchema = new mg.Schema({
  _id: Number,
  name: String,
  surname: String,
  age: Number,
  category: String,
});

const mymodel = mg.model("userdata", mySchema);

const insert = async () => {
  try {
    const data = [
      { _id: 123433, name: "DD", surname: "abc", age: 61 },
      { _id: 123434, name: "LL", surname: "def", age: 38 },
      { _id: 123435, name: "KK", surname: "pqr", age: 29 },
      { _id: 123436, name: "ZZ", surname: "xyz", age: 62 },
    ];
    // await mymodel.insertMany(data);
    //Insert a category field with value “SeniorCitizen” having age
    //greater than 60.
    const res1 = await mymodel.updateMany(
      { age: { $gt: 60 } },
      { $set: { category: "SeniorCitizen" } },
    );
    console.log(res1);

    // Display total number of documents having age between 30 and
    // 60 only.
    const res2 = await mymodel.countDocuments({ age: {$gte: 30, $lte: 60 } });
    console.log(res2);
  } catch (err) {
    console.log(err);
  }
};
insert();
