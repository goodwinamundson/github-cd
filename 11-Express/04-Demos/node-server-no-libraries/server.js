

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = `<center><h1>${q.month}, ${q.year}</h1></center>`;
  res.end(txt);

}).listen(8080);

// Visit http://localhost:8080/?year=2022&month=March
