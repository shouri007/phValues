var express = require('express');
var config = require('./server/configure');
var path = require('path');
var pg = require('pg');

var port = 3000 || process.env.PORT;
var app = express();
app = config(app);


app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('port',port);
app.listen(port);
console.log("application listening on port " + port);
