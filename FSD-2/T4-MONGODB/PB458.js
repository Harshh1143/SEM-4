const expr = require("express");
const mg = require("mongoose");
var app = expr();

app.use(expr.static(__dirname, { index: "PB458.html" }));

mg.connect("mongodb://127.0.0.1:27017/PB458")
  .then(() => console.log("Connection successfull"))
  .catch((err) => console.log(err));

mg.pluralize(null)

const mySchema = new mg.Schema({
  name: { type: String, required: true },
  surname: { type: String },
  age: { type: Number },
  active: { type: Boolean },
  date: { type: Date, default: Date.now },
});

const Student = new mg.model("data1",mySchema)

app.get("/insert",(req,res)=>{
    const sdata = new Student({
        name : req.query.name,
        surname : req.query.surname,
        age : req.query.age,
        active : req.query.active,
        date : req.query.date
    })
    sdata.save()
    res.send("Record Inserted")
})
app.listen(3000)