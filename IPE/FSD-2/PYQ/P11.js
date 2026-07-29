// Write a script to Initialize two variables and increment both the variables each time and
// display the addition of both the variables at interval of 1 second

let a = 1 
let b = 1 

setInterval(()=>{
    a++
    b++
    console.log("A",a)
    console.log("B",b)
    console.log("Addition ",a+b)
},1000)