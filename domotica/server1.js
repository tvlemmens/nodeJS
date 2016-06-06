var net = require('net');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/process_get', function (req, res) {

  console.log(req.query);
   // Prepare output in JSON format
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/printName', function (req, res) {
  console.log("printName called.");
  console.log(req.query);
  res.end("<h1>printName called!</h1><p>For lamp: " + req.query.lamp);
})

var server = app.listen(8081, "127.0.0.1", function () {

  var host = server.address().address
  var full = server.address();
  var port = server.address().port
  console.log(full);
  console.log("Example app listening at http://%s:%s", host, port)

})


function sendAction(){
  var client = new net.Socket();
  client.connect(2301, '192.168.1.2', function() {
  	console.log('Connected');
  	client.write('*T,0,0,4;');
  });

  client.on('data', function(data) {
  	console.log('Received: ' + data);
  	client.destroy(); // kill client after server's response
  });

  client.on('close', function() {
  	console.log('Connection closed');
  });
}
