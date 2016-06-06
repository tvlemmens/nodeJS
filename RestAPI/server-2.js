var express = require('express');
var bodyParser = require('body-parser');
var hostname = 'localhost';
var port = 8081;

var app = express();

app.use(bodyParser.json());

//app.use(express.static(__dirname + '/public'));
app.all('/dishes', function (req, res, next){
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    next();
});

app.get('/dishes', function(req, res, next){
  res.end('Sending the dishes...');
});

app.get('/dishes/:dishID', function(req, res, next){
  res.end('Sending the dish: ' + req.params.dishID);
  console.log(req.params);
});

app.post('/dishes', function(req, res, next){
    res.end('Posting the dishes...' + JSON.stringify(req.body));
    console.log(req.body);
    console.log(typeof req.body);
});

app.listen(port, hostname, function(){
  console.log(`Server started listening on http://${hostname}:${port}`);
});
