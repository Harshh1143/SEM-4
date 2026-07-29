// Create a form.html file having name, email, date of joining fields and insert data entered
// by user in collection named “details” in mongoDB. Define a schema having fields like
// name, email, date of joining.
// Apply following validations:
// (1) Name field must remove leading/trailing spaces, minimum and maximum length
// should be 3 & 12 respectively and it should store values in capital letters only.
// (2) perform email validation on Email field.
// (3) date of joining should allow values between 1-1-2010 to 31-12-2022 only(date data
// type).

const express = require("express");
const app = express();
const mg = require("mongoose");

mg.connect("mongodb://127.0.0.1:27017/db111")
  .then(() => console.log("connection succesfull"))
  .then((err) => console.log(err));

const mySchema = mg.Schema({
    name : {
        type : String,
        trim : true,
        minlength: 3,
        maxlength : 12,
        uppercase : true
    },
    email : {
        type : String,
        match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    },
    doj :{
        type:Date,
        min : new Date('2010-01-01'),
        max : new Date("2022-12-31")
    }
})

const Model = new mg.model("details",mySchema)

app.use(express.static(__dirname,{index:"P22.html"}))
app.use(express.urlencoded())

app.post("/save",async (req , res)=>{
    try {
        const data = new Model({
            name : req.body.name,
            email : req.body.email,
            doj : req.body.doj 
        })
        await data.save()
        res.send("<h1>Data inserted sucessfully </h1>")
    }
    catch(err){
        res.send(err.message)
    }
})

app.listen(3000)