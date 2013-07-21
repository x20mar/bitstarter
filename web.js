var express = require('express');

var port = process.env.PORT || 8080;
var app = express();
 
// log requests
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'));
app.use(app.router);
 
app.listen(port, function() {
	console.log("Listening on " + port);
});