// Cookie Task
// You have been assigned to develop a user feedback form for a website using Express.js and cookies.
// Implement the following requirements:
// • Create a form with the following fields:
// o Name (input field)
// o Email (input field)
// o Message (textarea field)
// o Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
// • When the user submits the form, store their feedback information (name, email, message, and
// rating) in a cookie named "feedback" that expires in 10 seconds.
// Display a confirmation message to the user after successfully submitting the form & Create a
// link to display the feedback details stored in the "feedback" cookie.
// • When the user clicks to the link, retrieve the feedback information from the cookie and display
// it on the page also include a link on the feedback details page to Logout.When the user clicks
// the link, user redirected to home page.
// • After, 10 seconds it will give message “No Feedback available” message to user


const express = require("express")
const app = express()
const cp = require("cookie-parser")
app.use(cp())
app.use(express.static(__dirname,{index:"ExpressCookie.html"}))

app.get("/data",(req,res)=>{
    res.set("content-type","text/html")
    const {name,email,textarea,rate} = req.query
    const feedback = {name,email,textarea,rate} 
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send("<h2>Thank you for your feedback ! </h2> <br> <a href='/details' >Show Feedback </a>")
})

app.get("/details",(req,res)=>{
    feedback = req.cookies.feedback
    if (feedback) {
        res.send(`
            <h1>Feedback Details </h1>
            <h3>Name : ${feedback.name} </h3>
            <h3>Email :  ${feedback.email} </h3>
            <h3>Textarea : ${feedback.textarea} </h3>
            <h3>Rating : ${feedback.rate} </h3>
            <a href='/' >Logout </a>
            `)
    }
    else {
        res.send("No feedback avaiable")
    }
})

app.listen(3000)