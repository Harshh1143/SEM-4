const expr = require("express");
const app = expr();
const mg = require("mongoose");
const cors = require("cors")
mg.connect("mongodb://127.0.0.1:27017/PB469");
app.use(cors())
app.use(expr.json())
const mySchema = new mg.Schema({
  username: String,
});

const student = new mg.model("data1", mySchema);

app.post("/signup",async(req , res)=>{
    try {
        const {username } = req.body
        
        const newUser = new student({username})
        await newUser.save()
        res.send()
    }catch(err){
        res.send(err)
    }
})
app.listen(3000)