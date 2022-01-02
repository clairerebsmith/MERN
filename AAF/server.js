var http = require("http");
var url = require("url");

function start(handle, route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url).query;
    route(handle, pathname,response, query);
    console.log("Request from " + pathname);
    response.writeHead(200, {"Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
http.createServer(onRequest).listen(3000);
console.log("Server started");
}
exports.start = start;
