/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
//require HTTP
var http = require('http');

// // create server
// http.createServer(function(req,res){
// 	res.end('Hello World!');
// }).listen(8000,'127.0.0.1');

// console.log('Server running at port localhost:8000');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// default engine
app.engine('html',require('ejs').renderFile);

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
//app.set('views', __dirname + '/public');

// app.use(express.static(path.join(__dirname + 'public')));

app.get("/",function(req,res){
	res.render('index.html',null);
});
app.get("/typhoon",function(req,res){
	res.render('typhoon.html',null);
});
app.get("/earthquake",function(req,res){
	res.render('earthquake.html',null);
});
app.get("/contacts",function(req,res){
	res.render('contacts.html',null);
});

// get the app environment from Cloud Foundry
// var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
var server = app.listen(8000, function() {

  var host = server.address().address;
  var port = server.address().port;
	// print a message when the server starts listening
  console.log("Example app listening at http://" + host + " :", host, port);
});
