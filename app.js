
var http = require('http');

setInterval(function() {
  console.log('YOOOO')
  console.log(process.env.args)
  console.log(process.env.NODE_ENV)
}, 1000)

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('hey');
}).listen(process.env.PORT || 8000, function() {
  console.log('App listening on port %d', server.address().port);
});
