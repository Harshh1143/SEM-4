
fs = require('fs')
fs.writeFile('hello.txt',' Good Day ',(err)=>{
    if(err) throw err
    console.log("Written operation enter")

fs.appendFile('hello.txt','It is great day',(err)=>{
    if(err) throw err
    console.log("Append done")

fs.readFile('hello.txt','UTF-8',(err,data)=>{
    if(err) throw err
    console.log(data)
    console.log('Read operation done')
    })
    })
})
console.log("Process end")