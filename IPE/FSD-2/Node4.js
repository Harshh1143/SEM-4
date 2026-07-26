// Write a node js script to write the text “This is data” to new.txt file. After that append the
// text “that is data” to same ne .txt file. After that read the file and print file concept on
// console. After finishing read operation, print the line “Thanks for using my program” on
// console. All read/write operations are asynchronous. (Using Event)

const fs = require("fs")
const event = require("events")
const ee = new event()

ee.on("write",()=>{
    fs.writeFile("node4.txt","This is data",(err)=>{
        if (err) throw err
        console.log("Write done")
        ee.emit("append")
    })
})

ee.on("append",()=>{
    fs.appendFile("node4.txt"," That is data",(err)=>{
        if (err) throw err 
        console.log("Append done ")
        ee.emit("read")
    })
})

ee.on("read",()=>{
    fs.readFile("node4.txt","utf-8",(err,data)=>{
        if (err) throw err 
        console.log("Content of Files : ",data)
        ee.emit("finish")
    })
})

ee.on("finish",()=>{
    console.log("Thanks for using program")
})

ee.emit("write")