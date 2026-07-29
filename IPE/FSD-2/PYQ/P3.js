// Develop a user signup form for a website using Express.js and cookies. Implement the
// following requirements:
// Create a form with the following fields:
// o	Name (input field)
// o	Contact Number (input field)
// o	Email (input field)
// o	Address (textarea field)
// o	Gender (radio buttons: Male, Female, Others)
// o	DOB (date picker)
// o	Submit button
// When the user submits the form, store their information (name, contact number, email,
// Address, gender & DOB) in a cookie named "registered" that expires in 15 seconds.
// Display a confirmation message to the user after successfully submitting the form &
// Create a link to display the details stored in the "registered" cookie.
// When the user clicks to the link, retrieve the information from the cookie and display it
// on the page also include a link on the details page to Logout. When the user clicks the
// link, user redirected to home page.

const express = require("express");
const cookie = require("cookie-parser");
const app = express();
app.use(cookie())
app.use(express.static(__dirname, { index: "form.html" }));


app.get("/save", (req, res) => {
  const { name, contact, email, address, gender, dob } = req.query;
  const registered = { name, contact, email, address, gender, dob };
  res.cookie("registered", registered);
  res.send(
    "<h1>Form submited sucessfully </h1> <a href='/detail'>Details </a>",
  );
});

app.get("/detail", (req, res) => {
  const data = req.cookies.registered;
  res.send(`<h2>Name ${data.name}
        Contact ${data.contact}
        Email ${data.email}
        Address ${data.address}
        Gender ${data.gender}
        Dob ${data.dob}
        </h2>
        <a href='/'>Logout</a>
        `);
});

app.listen(3000)