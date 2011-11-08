var io = require('socket.io');
var HOST = '0.0.0.0';
var express = require('express');

var app = express.createServer(), io = io.listen(app);

app.listen(process.env.C9_PORT, HOST);

io.sockets.on('connection', function (socket) {
  
  socket.on('color', function (data) {
    console.log(data);
    socket.broadcast.emit('color', { color: data });
  });
});