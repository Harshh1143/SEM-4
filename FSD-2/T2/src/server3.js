const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(('../public',{index:'form.html'})));
app.get('/data',(req,res)=>{
    fname = req.query.name;
    password = req.query.password;
    res.send(`Your name is ${fname} and your password is ${password}`);
});
app.listen(7008, () => {
    console.log("Server running on http://localhost:7008");
});