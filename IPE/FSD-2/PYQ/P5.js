// Write a program to upload a text file upto 1MB size only using express JS. Perform
// necessary validation for file format and size

const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.static(__dirname, { index: "P5.html" }));

const storage = multer.diskStorage({
  destination: "P5",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 } });
app.use(express.urlencoded())
app.post("/detail", upload.single("myfile"), (req, res) => {
  const file = req.file;
  if (file) {
    res.send(
      `<h1> File ${file.originalname} has been uploaded at ${file.destination} </h1> `,
    );
  }
});

app.listen(3000)