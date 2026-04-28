expr = require('express')
app = expr()
sess = require('express-session')
app.use(sess({secret:'This is Key',resave:false,saveUninitialized:false}))

app.use(expr.static('../public',{index:'form22.html'}))

app.get('/savesession',(req,res)=>{
    req.session.fname=req.query.fname
    req.session.pwd=req.query.pwd
    res.redirect('/fetch')
})

app.get('/fetch',(req,res)=>{
    res.send(`welcome ${req.session.fname}
        <a href='/destroy'>Logout</a>`)
})

app.listen(3001,()=>{
    console.log('http://localhost:3001')
})