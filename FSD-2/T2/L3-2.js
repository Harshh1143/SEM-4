express = require('express')
app = express()
const a = (req,res,next)=>{
    req.uname='abc'
    console.log(`Uname insert`)
    next()
}
app.use(a)
const b = (req,res,next)=>{
    req.mark=20+3
    console.log(`Marks updated`)
    next()
}
app.use('/data',a,b)
app.get('/data',(req,res)=>{
    res.send(`Username is ${req.uname} and marks are ${req.mark}`)
})
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})