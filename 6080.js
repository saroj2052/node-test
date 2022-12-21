
var http = require('http');
require('dotenv').config();
process.env.TEST;
const a = process.env.TEST;
http.createServer(function(req,res){
 res.writeHead(200, { 'Content-Type': 'text/plain' });
 res.end('Hello Teams Happy Dasai and tihar');
}).listen(a);
console.log('Server started on localhost:8080; press Ctrl-C to terminate...!',process.env.TEST);
