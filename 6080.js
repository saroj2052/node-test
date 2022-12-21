var http = require('http');
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello Teams Happy Dasai and tihar $PORT');
}).listen($PORT);
console.log('Server started on localhost:$PORT; press Ctrl-C to terminate...!');
