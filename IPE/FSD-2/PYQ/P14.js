// Write a node.js script to create two listeners for a common event and call their respective
// callbacks. Print number of events associated with an emitter. Remove one of the
// listeners & call remaining listeners again. Print number of remaining listeners also.

const event = require("events")
const ee = new event()

ee.on("common",()=>{
    console.log("Common Listener 1 initiated")
})

ee.on("common",()=>{
    console.log("Common Listener 2 initiated")
})

console.log(ee.listenerCount("common"))
ee.emit("common")
ee.removeListener("common")
console.log("After removing")
ee.emit("common")
console.log(ee.listenerCount("common"))