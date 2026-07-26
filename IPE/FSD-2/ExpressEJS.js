const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const t1 = Number(req.body.t1);
  const t2 = Number(req.body.t2);
  const t3 = Number(req.body.t3);
  const t4 = Number(req.body.t4);
  const total = t1 + t2 + t3 + t4;
  res.render("result", { t1, t2, t3, t4, total });
});
app.listen(3000);
