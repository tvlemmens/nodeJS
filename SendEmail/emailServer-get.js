var express     = require('express');
var bodyParser  = require('body-parser');
var nodemailer  = require('nodemailer');
var morgan      = require('morgan');

var hostname    = 'localhost';
var port        = 3000;

var app         = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/sendEmail',function(req, res){

    console.log("GET request received");
    //console.log(req.query);

    var emailFrom    =  req.query.inputFrom,
        emailTo      =  req.query.inputTo,
        emailSubject =  req.query.inputSubject,
        emailBody    =  req.query.inputBody;

    var mailOptions = {
        from: 'vanlemmens@telenet.be', // sender address
        to: 'tom.vanlemmens@inin.com', // list of receivers
        subject: emailSubject, // Subject line
        text: emailBody
    };
    var transporter = nodemailer.createTransport({
        host: 'smtp.telenet.be',
        port: 587,
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.send(error);
            //res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.sendFile(__dirname + '/public/success.html');
        };
    });

});



app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
