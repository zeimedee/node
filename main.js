var http = require("http");
http.createServer(function(request, response){

    //send the http header
    //http status:200:ok
    //content type: text/plain
    response.writeHead(200,{'Conten-Type': 'text/plain'});

    //send the reponse body as 'hello world'
    response.end('Hello World\n');
}).listen(8081);
    //console will print the message
console.log('server running at http://127.0.0.1:8081/');