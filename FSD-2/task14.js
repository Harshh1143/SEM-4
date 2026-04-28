// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. And object as well as calculated  data in shape.txt	
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs = require('fs')
fs.writeFileSync('shape.txt',JSON.stringify(shape))
var data = fs.readFileSync('shape.txt')
data = JSON.parse(data)
var ps = data[0]['diameter']/2
var pc = data[1]['side']
ps = 2*3.14*ps
pc = 4*pc
ps1 = "Perimeter of circle "+pc
pc2 = "Perimeter of square "+ps
fs.appendFileSync("shape.txt",ps1)
fs.appendFileSync('shape.txt',pc2)
console.log("Perimeter of circle",ps)
console.log("Perimeter of Square",pc)
