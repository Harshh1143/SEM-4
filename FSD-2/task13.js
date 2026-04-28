// Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console. 
var obj = [{'name':'harshh','age':20},{'name':'hehehe','age':22}]
fs = require('fs')
fs.writeFileSync('data1.txt',JSON.stringify(obj))
console.log(JSON.stringify(obj))
fs.copyFileSync('data1.txt','Student.txt')
var data = fs.readFileSync('Student.txt')
var d = JSON.parse(data)
console.log(d[0]['name'],d[0]['age'])