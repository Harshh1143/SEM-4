// Write a script to meet following requirements:
// • Create session.html file page which contains form (username, password, login button). and
// open it on localhost.
// • After clicking submit button, it should jump on “save” page. Store username and password in
// session.
// • After saving session, redirect to “fetchdata” page and read value. On this page check
// authentication of user. User name and password must be “admin” and “admin@123”
// respectively.
// o If this condition is true then display welcome admin and display logout link on this
// page(fetchdata).
// ▪ By clicking on logout link user should jump to “destroy” page and destroy the session there
// and display the message “Session destroyed”. And give the link of “login” under that
// message. By clicking that link user will be redirected to the home page.
// o Else display “Please enter valid username and password” and login link on this
// page(fetchdata).

const express = require("express");
const app = express();
const es = require("express-session");
app.use(es({ secret: "key" }));
app.use(express.static(__dirname, { index: "ExpressSession.html" }));

app.get("/save", (req, res) => {
  req.session.name = req.query.name;
  req.session.password = req.query.password;
  res.redirect("fetchdata");
});

app.get("/fetchdata", (req, res) => {
  if (req.session.name == "admin" && req.session.password == "admin@123") {
    res.write("<h1>Welcome admin </h1>");
    res.write("<a href='/logout' >Logout </a> ");
  } else {
    res.write(
      "<h1>Please enter valid username password</h1> <a href='/'>Login</a>",
    );
  }
  res.send();
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.write("<h1>Session Destroyed</h1><a href='/'>Login</a>");
  res.send();
});
app.listen(3000)