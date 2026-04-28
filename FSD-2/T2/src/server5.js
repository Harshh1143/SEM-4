const expr = require("express");
app =expr()
cp2 = require('cookie-parser')
app.use(cp2())
app.use(expr.static('../public', { index: "index1.html" }));
app.use(expr.urlencoded({extended:true}))
app.post('/htmlform',(req,res)=>{
    const {name,email,msg,rating}=reg.body
    const fb={name,email,msg,rating}
    res.cookie('feedback',fb,{maxAge:10000})
    res.send(`<h1>Thank you for f/b</h1>
        <a href ='/show-fb'>
        show f/b </a>`)
})
app.post('/show-fb',(req,res)=>{
    data=req.cookies.feedback
    if (data){
    res.send(`Welcome
        ${req.cookies.firstname} your password is ${ req.cookies.password}`)
    }
    else{
        res.send('No data foumd')
    }
})
app.listen(5674, () => {
    console.log("Server running on http://localhost:5674");
});
