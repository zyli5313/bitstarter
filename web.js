var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var  = fs.readFileSync("index.html", "utf8");
  var buffer = new Buffer(str, "utf-8")
  response.send(buffer.toString("utf-8"));
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
