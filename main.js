var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello Hero\n');
}).listen(8000,function(){
    console.log("Server running at http://localhost:8000");
});


