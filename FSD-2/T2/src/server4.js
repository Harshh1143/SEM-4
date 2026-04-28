const expr = require("express");
app =expr()
cp1 = require('cookie-parser')
app.use(cp1())
app.use(expr.static('../public'))
app.use(expr.urlencoded({extended:true}))
app.post('/data',(req,res)=>{
    const fname=req.body.fname
    const pwd=req.body.pwd
    res.cookie('firstname',fname)
    res.cookie('password',pwd)
    res.redirect('/user')
})
app.get('/user',(req,res)=>{
    res.send(`Welcome
        ${req.cookies.firstname} your password is ${ req.cookies.password}`)
})
app.listen(5672, () => {
    console.log("Server running on http://localhost:5672");
});