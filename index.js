const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  console.log(req.body);
  //Formating content to be send      
  var emailcontent = `<h3 style="color:red;"">Aloqa Ma'lumotlari</h3>
                     <ul>
                      <li>Ism: ${req.body.name}</li>
                      <li>E-mail : ${req.body.email}</li>
                     </ul>
                     <h2>Xabar</h2>
                      <p>Xabar: ${req.body.subject}</p>
                          `;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uzbekprogramist@gmail.com",
      pass: "998993681289"
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  //Preparing the mailOptions object
  var mailOptions = {
    from: "uzbekprogramist@gmail.com",
    to: "uzbprogramsit@gmail.com",
    subject: "Ihouse Site",
    text: req.body.subject,
    html: emailcontent
  };
  //Sending email using transporter function
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
