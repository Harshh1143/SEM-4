// Write a NodeJS script to take 2 elements 1 & 1000 using file system module & find
// Kaprekar numbers between them. A Kaprekar number is a number whose square when
// divided into two parts and such that sum of parts is equal to the original number and
// none of the parts has value 0. 

const fs = require("fs")
const data = fs.readFileSync("input.txt",'utf-8').trim().split(" ")

console.log(data)
const fn = Number(data[0])
const ln = Number(data[1])

for (let i = start; i<=ln; i++ ) {
    const sq = i*i 
    const digit = i.toString().length()
    
}