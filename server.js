var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var io = require('socket.io')(server);

app.use(express.static('client'));

io.on('connection', function(socket) {
  socket.on('message', function(msg) {
    io.emit('message', msg);
  });
  socket.on('disconnect', function () {
    io.emit('message', "User disconnected");
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  var addr = server.address();
  console.log("Chat server running at", addr.address + ":" + addr.port);
});
