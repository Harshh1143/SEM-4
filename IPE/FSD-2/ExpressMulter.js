// Multer Task
// Write an express js script to configure the multer middleware. Perform following tasks.
// 1) Create a html file named "file.html". This file contains heading(h3) "Upload your CV" in red
// color. And, a form with input type file(to browse and select file) and submit(to upload the file).
// 2) Create a js file named "file.js" and link this js and html file to browse html file on "/home"
// page.
// 3) After uploading a file display message on "/upload" page "(file original name) has been
// uploaded".
// 4) Save uploaded files to specific directory named "upload". And in this folder file must be stored
// in format of "lju-file.pdf" where "lju" is the field name.

const express = require("express");
const app = express();
const multer = require("multer");
app.use(express.static(__dirname, { index: "ExpressMulter.html" }));
app.use(express.urlencoded());
var storage = multer.diskStorage({
  destination: "upload",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-file.pdf");
  },
});

var upload = multer({ storage: storage });
app.post("/upload", upload.single("files"), (req, res) => {
  const file = req.file;
  console.log(file);
  if (file) {
    res.send(
      `<h1> File ${file.originalname} has been uploaded at ${file.destination} </h1> `,
    );
  }
});

app.listen(3000);
