const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/maindata");

const myschema = new mg.Schema({
  title: String,
  director: String,
  release_year: Number,
});

const mymodel = mg.model("movie", myschema);

const insert = async () => {
  try {
    const data = [
      {
        title: "Inception",
        director: "Christopher Nolan",
        release_year: 2010,
      },
      {
        title: "The Matrix",
        director: "The Wachowskis",
        release_year: 1999,
      },
      {
        title: "The Avengers",
        director: "Joss Whedon",
        release_year: 2012,
      },
    ];
    await mymodel.insertMany(data);
    // Create a subset-based index that includes only movies released
    //after the year 2000. Specify the field or condition used in the subset.
    //Additionally, write a command to get a scan stage = “IXSCAN”

    await mymodel.collection.createIndex(
      { release_year: 1 },
      { partialFilterExpression: { release_year: { $gt: 2000 } } },
    );
    const res1 = await mymodel
      .find({ release_year: { $gt: 2000 } })
      .explain("executionStats");
      console.log(res1)
  } catch (err) {
    console.log(err);
  }
};
insert()