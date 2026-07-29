// Consider following citizens collection:
// [ {name: “DD", surname: "abc", age:61},
//  {name: "LL", surname: "def", age:38},
//  {name: "KK", surname: "pqr", age:29}
//  {name: "ZZ", surname: "xyz", age:62}]
// Insert above data in userdata collection under database named “maindata” and write a
// query to perform below task in node.js.
// (1) 	Insert a category field with value “SeniorCitizen” having age greater than 60.
// (2) 	Sort the collection by age in descending order and display the youngest person’s
// name only.
// (3) 	Display total number of documents having age between 30 and 60 only.
// (4) 	Display only surname field in ascending order of age.
// (5) 	Delete the record having age greater than 60.

const mg = require("mongoose");
mg.connect("mongodb://127.0.0.1:27017/maindata11");

const data = [
  { name: "DD", surname: "abc", age: 61 },
  { name: "LL", surname: "def", age: 38 },
  { name: "KK", surname: "pqr", age: 29 },
  { name: "ZZ", surname: "xyz", age: 62 },
];

const mySchema = mg.Schema({
    name : String ,
    surname : String,
    age : Number
})

const mymodel = new mg.model("userdata",mySchema)

async function main(){
    try{
        // await mymodel.insertMany(data)
        // console.log("Inserted succesfully")

        await mymodel.updateMany({age:{$gt:60}},{$set:{category:"SeniorCitizen"}})
        console.log("Update sucesfull")

        const young = await mymodel.find().sort({age:-1}).limit(1)
        console.log(young)

        const total = await mymodel.countDocuments({age:{$gt:30,$lt:60}})
        console.log(total) 

        const sur = await mymodel.find({},{surname:1,_id:0}).sort({age:-1})
        console.log(sur)

        await mymodel.deleteMany({age:{$gt:60}})
    }catch(err){
        console.log(err)
    }
}

main()