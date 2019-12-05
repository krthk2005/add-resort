var app = require("app.js");
var debug = require("debug")("mean-app:server");
var http = require("http");

var port = normalizePort(process.env.PORT || "4200");
app.set("port", port);

var server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening() {
  var addr = server.address();
  debug("Listening on " + port);
}
