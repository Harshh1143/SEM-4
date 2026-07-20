const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/PB467");

const mySchema = new mg.Schema({
  name: { type: String, required: true },
  surname: { type: String, lowercase: true },
  email: { type: String, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  password: { type: String, minlength: 8, maxlength: 12 },
  city: { type: String, enum: ["baroda", "surat", "ahmedabad"] },
});

const student = new mg.model("data1", mySchema);

const insert = async () => {
  try {
    const data = {
      name: "Harsh",
      surname: "MISTRY",
      email: "harsh@gmail.com",
      password: "password1",
      city: "ahmedabad",
    };
    const result = await student.insertMany(data);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
insert();
