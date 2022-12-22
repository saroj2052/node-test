
var http = require('http');
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello Teams Happy Dasai and tihar');
}).listen(PORT);
console.log('Server started on localhost:8080; press Ctrl-C to terminate...!');
