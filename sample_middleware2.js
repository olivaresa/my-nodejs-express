var express = require('express');
var app = express();

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};


var requestCoco = function (req, res, next) {
  req.requestCoco = "Hola cocolin";
  next();
};

app.use(requestTime, requestCoco);

app.get('/', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});

app.get('/otra', function (req, res) {
  var responseText = 'Hello World otra route!';
  responseText += 'Requested at: ' + req.requestTime + '';
  responseText += ' Saludo al coco: ' + req.requestCoco + '';
  res.send(responseText);
});

app.listen(3000);
