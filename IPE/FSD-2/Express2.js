// Post Method Task
// Write express js script to perform the tasks as asked below.
// 1) Create one HTML file named ljform.html and add one form which contains username, password
// and submit button. Data should be submitted by HTTP post method.
// 2) Submit button is of black color with white text. (External CSS)
// 3) On home page form should be displayed and while submitting the form, on next page named
// “/login” if username is admin then it will display “Welcome admin” else display “Please login with
// Admin name”.

const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname,{index:"Express2.html"}))
app.post("/home",(req,res)=>{
    res.set("content-type","text/html")
    if(req.body.name== 'admin' ) {
        res.write("<h2>Welcome admin")
    } else {
        res.write("Please login with admin name")
    }
    res.send()
})

app.listen(3000)