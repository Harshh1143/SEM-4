// Write a NodeJS script to copy content of one file to another file using asynchronous
// callback. Copy file content from source.txt to destination.txt. Sequence must be
// maintained.

const fs = require('fs')

fs.writeFile("source.txt","Hello content to copy",(err)=>{
    if (err) throw err 
    console.log("Write sucessfully")
    fs.copyFile("source.txt","destination.txt",(err)=>{
        if (err) throw err 
        console.log("Copy sucessfully")
    })
})