var express = require('express'); //this is express
var app = express(); //app is being set to express to call things
var http = require('http').Server(app); //http is from node

app.use(express.static(__dirname + '/public')); //express

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html'); //express
});

http.listen(process.env.PORT || 3000, function(){
	console.log('listening on port 3000'); //node, statement is saying use whatever port that is there if there is one, otherwise use port 3000
});