expr = require("express");
app = expr();
sess = require("express-session");
app.use(
  sess({ secret: "this is the key ", resave: false, saveUninitialized: false }),
);

app.get("/", (req, res) => {
  if (req.session.a) {
    req.session.a++;
    res.send(`You visited the page 
            ${req.session.a} times`);
  } else {
    req.session.a = 1;
    res.send("Welcome user");
  }
});

app.listen(5674, () => {
  console.log("Server running on http://localhost:5674");
})
