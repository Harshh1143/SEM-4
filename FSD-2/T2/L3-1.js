const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<form action='/data' method='get'>
        Username <input type='text' name='username'>
        Password <input type='password' name='password'>
        <input type='submit'>
        </form>
        `)
})
app.get('/data',(req,res)=>{
    uname=req.query.username
    pass = req.query.password
    res.send(`Welcome ${uname} and pass ${pass}`)
})
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})