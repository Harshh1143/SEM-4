// Write a script to meet following requirements:
// (1) Create an index.html file & open it on localhost.
// (2) After clicking submit button, it should jump to "savesession" page. Store username
// in session.
// (3) After saving session, redirect to "fetchsession" page & read session value. Put a
// logout link button here.
// (4) Jump on "deletesession" page on clicking "logout" link.
// (5) Destroy the session on this page & redirect to index.html page.

const express = require("express")
const app = express()
const session = require("express-session")

app.use(express.static(__dirname,{index:"P6.html"}))
app.use(session({
    secret : "mykey"
}))

app.get("/savesession",(req,res)=>{
    req.session.name = req.query.name 
    res.redirect("/fetchsession")
})

app.get("/fetchsession",(req,res)=>{
    const name = req.session.name 
    res.send(`<h1>Welcome ${name} </h1> <a href='/deletesession'>Logout</a>  `)
})

app.get("/deletesession",(req,res)=>{
    req.session.destroy()
    res.send("<h1>Session destroyed <")
})

app.listen(3000)