expr = require("express");
app=expr();
app.set('view enginer','ejs')
app.get('/',(req,res)=>{
    res.render('first.ejs');
})
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})