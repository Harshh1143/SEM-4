expr = require("express");
nm = require("nodemailer");
var trans = nm.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "mistryharsh5416@gmail.com",
    pass: "oehj ehki xcjv xkwu",
  },
});
var mailoption = {
  from: "mistryharsh5416@gmail.com",
  to: "karutasofi6969@gmail.com",
  subject: "Testing",
  text: "Hello World",
};
trans.sendMail(mailoption, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});
