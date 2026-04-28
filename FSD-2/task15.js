// Write node js script and json to perform below tasks. 

// 1.	Write below object in txt file named input.txt  

// {data:{a:15,b:20,c:[40,30]}}

// 2.	Read data from the same file and perform the below tasks.

// a.	addition of a and b.

// b.	subtraction of 2nd element of c and b. (Must be positive value)

// c.	multiplication of elements of c.

// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.
const data = {data:{a:15,b:20,c:[40,30]}}
fs = require('fs')
fs.writeFileSync('input.txt',JSON.stringify(data))
var obj = fs.readFileSync('input.txt')
obj = JSON.parse(obj)
var a = obj.data['a']
var b = obj.data['b']
var c = obj.data['c'][1]
var c1 = obj.data['c'][0]
console.log(a+b)
console.log(c-b)
console.log(c1*c)
fs.appendFileSync('output.txt','\n Addition '+(a+b))
fs.appendFileSync('output.txt','\n Subtraction '+(c-b))
fs.appendFileSync('output.txt','\n Addition '+(c1*c))