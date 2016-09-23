
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var partials = require("express-partials");
var app = express();
var routes = require('./routes');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());
//app.use(express.bodyParser());

//routes
routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
