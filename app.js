/**
 * Module dependencies.
 */

var st = require('st');
var express = require('express');
var http = require('http');


var app = express();

// all environments
app.set('port', process.env.PORT || 3001);

app.get('/', function(request, response){
  response.sendFile(process.cwd() +'/index.html');
});

// Static
app.use(st({ path: './public', url: '/public' }));

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
