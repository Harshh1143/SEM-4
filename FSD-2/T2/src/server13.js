const multer = require("multer");
expr = require("express");
app = expr();
app.use(expr.static("../public", { index: "form_1.html" }));
storage = multer.diskStorage({
  destination: "Jambo",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

upload = multer({ storage });
app.post("/data", upload.array("myfile", 3), (req, res) => {
  let file = req.files;
  if (file) {
    for (i of file) {
      res.write(`file upload ${i.originalname} done`);
    }
    res.send();
  } else {
    res.send("not uploded");
  }
});

app.listen(5231, () => {
  console.log("Server running on http://localhost:5231");
});
