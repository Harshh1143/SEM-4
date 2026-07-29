// Write node js script to handle events as asked below.1) Check the radius of circle is
// negative or not. If negative then display message “Radius must bepositive” else
// calculate the area of circle. 2) Check side of square is negative or not. If negative then
// display message “Side must be positive” else calculate the perimeter of square.

const event = require("events")
const ee = new event()

ee.on("circle",(r)=>{
    if(r<0) {
        console.log("Radius must be positive")
    }
    const area = Math.PI * r * r
    console.log("Area of circle",area)
})

ee.on("square",(s)=>{
    if (s<0) {
        console.log("Side must be positive")
    }
    const side = s*s 
    console.log("Side of square",side)
})

ee.emit("circle",5)
ee.emit("circle",-2)

ee.emit("square",10)
ee.emit("square",-10)