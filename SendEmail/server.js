var nodemailer = require('nodemailer');
var express = require('express');
var app = express();


//var router = express.Router();

app.get('/listUsers', function (req, res) {

  // Note to put GMAIL authentication to less secure.
  // Remember to switch it back off after your tests!!!!!!!!
  // https://www.google.com/settings/security/lesssecureapps
  var transporter = nodemailer.createTransport({
      host: 'smtp.telenet.be',
      port: 587,
      auth: {
          user: 'a022673', // Your email id
          pass: 'g0tcha1' // Your password
      }
  });

  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.send(error);
          //res.json({yo: 'error'});
      }else{
          console.log('Message sent: ' + info.response);
          res.json({yo: info.response});
      };
  });



});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});

var text = "Hi, this is a mail sent from a web form";
var mailOptions = {
    from: 'vanlemmens@telenet.be', // sender address
    to: 'tom.vanlemmens@inin.com', // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};
