const express = require('express');
const app = express();
const path = require('path');
const sp = path.join(__dirname,'../public');
app.use(express.static(sp));
app.get('/',(req,res)=>{
    res.sendFile(path.join(sp+'/form.html'));
});
app.listen(7008, () => {
    console.log("Server running on http://localhost:7008");
});