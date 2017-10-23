const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath=path.join(__dirname,'../public')


var app = express();
var server=http.createServer(app)
var io =socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New User connected');

    socket.on('disconnect',()=>{
       console.log('user disconnected');
    });
});

server.listen(3000,()=>{
   console.log('Server is listing 3000 port');
});
