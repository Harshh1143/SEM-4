// Using Node.js, write a Node.js script that uses the Node.js Path Module and the Node.js File System Module with asynchronous methods to perform the following operations for the path FSD-mern/path.txt

// Extract the directory name from the given file path using the Path module.

// Create the extracted directory inside an existing folder using the asynchronous methods of the fs module.

// Extract the file name from the given path using the Path module.

// Create a file with the extracted file name inside the newly created directory and write some data into it.

// Copy the contents of this file to another file using an asynchronous file operation.

// Delete the original file after successfully copying the content.
path = require('path')
fs = require('fs')
a = path.dirname('FSD-mern/path.txt')
b = path.basename('FSD-mern/path.txt')
c = a+'/'+b
fs.mkdir(a,(err)=>{
    if(err) throw err
})
fs.writeFile(c ,'Some data callback',(err)=>{
        if(err) throw err
    })
    