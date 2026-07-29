const express = require("express");
const app = express();
const multer = require("multer");

app.use(express.static(__dirname, { index: "ExpressMultipleMulter.html" }));

var storage = multer.diskStorage({
  destination: "upload_multiple",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    }
  },
});

app.post("/upload", upload.array("lju", 5), (req, res) => {
  const files = req.files;
  console.log(files);
  if (files.length > 0) {
    let out = "<h2>Uploaded Files </h2>";
    files.map((f) => {
      out += `
            File : ${f.originalname} upload in ${f.destination}
            `;
    });
    res.send(out);
  }
});

app.listen(3000);
