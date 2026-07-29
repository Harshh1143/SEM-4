// Write a NodeJS script to take 2 elements 1 & 1000 using file system module & find
// Kaprekar numbers between them. A Kaprekar number is a number whose square when
// divided into two parts and such that sum of parts is equal to the original number and
// none of the parts has value 0.

const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf-8").trim().split(" ");

console.log(data);
const fn = Number(data[0]);
const ln = Number(data[1]);

for (let i = fn; i <= ln; i++) {
  let sq = i * i;
  let digits = i.toString().length;
  let divisor = Math.pow(10, digits);
  let left = Math.floor(sq / divisor);
  let right = sq % divisor;
  if (left > 0 && right > 0 && left + right === i) {
    console.log(i);
  }
}
