// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.
fs = require('fs')
fs.writeFileSync('task.txt','0 1 -9 20 33 -44 50')
data = fs.readFileSync('task.txt','UTF-8')
d = data.split(" ").sort()
console.log(d)