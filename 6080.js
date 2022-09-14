var http = require('http');
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello Node from and  santosh');
}).listen(6080);
console.log('Server started on localhost:6080; press Ctrl-C to terminate...!');
