function start() {
  console.log("Request handler start called");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("Request Handler start called");
  response.end();
}
function submit(response, query) {
  console.log("In submit with guery string " + query);
  var queryAsObject = querystring.parse(query);
  response.writeHead(200, { "Content-Type": "text/plain"} );
  reponse.write("Request Handler submit called with value " + queryAsObject['name']);
  response.end();
}
exports.start = start;
exports.submit = submit;
