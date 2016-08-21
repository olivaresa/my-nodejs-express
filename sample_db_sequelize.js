var express = require('express');
var Sequelize = require('sequelize');

var app = express();

var sequelize = new Sequelize('postgres://wrwtwr:45649898shs@localhost:5432/test_sequelize');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE
});

sequelize.sync().then(function() {
  return User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});


app.get('/user',function(req,res) {
	User.findOne().then(function (user) {
	    console.log(user.get('username'));
	    res.send(user.get('username'));
	});
});
// Or you can simply use a connection uri
//var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');


app.listen(3000);
