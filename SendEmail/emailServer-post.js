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

app.get('/', function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('No functionality hidden here!');
        console.log("GET request received");
        console.log(req.params);
});

app.post('/sendEmail',function(req, res){
    //res.end('Receiving POST information: \n' + "From: " + req.body.inputFrom + ' to: ' + req.body.inputTo);
    console.log(req.body);

    var emailFrom    =  req.body.inputFrom,
        emailTo      =  req.body.inputTo,
        emailSubject =  req.body.inputSubject,
        emailBody    =  req.body.inputBody;

    var mailOptions = {
        from: '', // sender address
        to: '', // list of receivers
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
