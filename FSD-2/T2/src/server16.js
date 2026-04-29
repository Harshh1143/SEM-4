expr = require("express");
nm = require("nodemailer");
app = expr();
app.use(expr.static("../public",{index:'form_nm.html'}));
app.get('/data',(req,res)=>{
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
  html: "<h1>Testing</h1><p>This is a test email.</p>",
  attachments: [
    {
      filename: "Bmw.png",
      path: "Bmw.png"
    }
  ]
};
trans.sendMail(mailoption, function (err, info) {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
})
})
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
