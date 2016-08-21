var express = require('express');
var app = express();

var myLogger = function (req, res, next) {
  console.log('iniciando middleware');
  next();
  console.log('fin middleware');
};

app.use(myLogger);

app.get('/', function (req, res) {
  console.log('iniciando router');
  res.send('Hello World!');
  console.log('fin router');
});

app.listen(3000);
