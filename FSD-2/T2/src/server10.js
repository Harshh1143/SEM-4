expr = require('express')
app = expr()
const mvi=[{'id':'101','name':'Don-1','year':2009},
        {'id':'102','name':'Don-2','year':2012},
        {'id':'103','name':'Don-3','year':2103}]
    
app.get('/m',(req,res)=>{
    res.json(mvi)
})
app.get('/m/:id',(req,res)=>{
    data=mvi.filter((a)=>a.id==req.params.id)
    if(data.length>0){
        res.json(mvi[0])
    }
    else{
        res.send('No data found')
    }
})
app.listen(5220, () => {
    console.log("Server running on http://localhost:5220") 
})