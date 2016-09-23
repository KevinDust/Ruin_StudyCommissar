
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var partials = require("express-partials");
var app = express();
var MongoStore = require('connect-mongo')(express);
var settings = require('./settings');
var flash = require('connect-flash');
var routes = require('./routes');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({
	secret: settings.cookieSecret,
	store: new MongoStore({
		db: settings.db
	})
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(partials());
app.use(flash());
//app.use(express.bodyParser());
app.use(express.bodyParser({uploadDir:'./tempFileUploads'}));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//routes
routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});