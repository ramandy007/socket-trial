var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(5000, function() {
  console.log("listening to port 5000");
});

app.use(express.static("public"));

var connect_arr = [];
var counter = 0;

var io = socket(server);
io.on("connection", function(socket) {
  console.log("made socket connection - ", socket.id);
  var pair = { [socket.id]: [counter++] };
  connect_arr.push(pair);
  socket.emit("token", {
    token: counter
  });
});
