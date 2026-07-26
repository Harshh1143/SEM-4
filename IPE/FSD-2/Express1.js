// Get Method Task
// Write express js script to perform tasks as asked below.
// 1. Create one HTML file which contains two number type input fields, one dropdown which
// contains options like (select, addition, subtraction, multiplication, division) and one
// submit button.
// 2. The input fields must contain the value greater than 0 else it will give a message “Please
// enter the valid number”. Also, user must select any of the formula from the dropdown
// else give a message “You have not selected any formula”. (Message will be displayed on
// “/calc” page.)
// 3. If one formula is selected and numbers are entered then respective calculations will be
// performed on the page “/calc”.
// 4. Use get method to request data.

const express = require("express");
const app = express();

app.use(express.static(__dirname, { index: "Express1.html" }));

app.get("/calc", (req, res) => {
    res.set("content-type",'text/html')
  n1 = Number(req.query.n1);
  n2 = Number(req.query.n2);
  formula = req.query.formula;
  if (n1 > 0 && n2 > 0) {
    if (formula == "add") {
      a = n1 + n2;
      res.write("<h2>Addition is " +a + "</h2>");
    } else if (formula == "sub") {
      a = n1 - n2;
      res.write("<h2>Subtraction is " +a + "</h2>");
    } else if (formula == "mul") {
      a = n1 * n2;
      res.write("<h2>Multiplication is "+a + "</h2>");
    } else if (formula == "div") {
      a = n1 / n2;
      res.write("<h2>Division is " +a + "</h2>");
    } else {
      res.write("<h2>You have not selected any formula </h2>");
    }
  }else {
    res.write("<h2>Number must be greater than 0 </h2>")
  }
  res.send()
});

app.listen(3000)