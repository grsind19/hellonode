
var apiai = require("apiai")
var express = require('express');
var appserver = apiai("27e60f28b5874b5ab678c856d3b0abb7");
var app = express();




var pinobjects = new Object();
app.get('/upload', function (req, res) {
    console.log("get:::::::::::");
      var request = appserver.textRequest('hi');

         request.on('response', function(response) {
             console.log(response);
            // validate(response);
             res.send(response);
        });

         request.on('error', function(error) {
             console.log(error);
         });

         request.end();
        
});
app.post('/upload', function (req, res) {
    console.log("post:::::::::::");
      var request = appserver.textRequest('hi');

         request.on('response', function(response) {
             console.log(response);
            // validate(response);
             res.send(response);
        });

         request.on('error', function(error) {
             console.log(error);
         });

         request.end();
        
});
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

