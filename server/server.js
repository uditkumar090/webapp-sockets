const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath=path.join(__dirname,'../public')
const {generateMessage} = require('./utils/messages')

const port =process.env.PORT || 3000;

var app = express();
var server=http.createServer(app)
var io =socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New User connected');

    socket.broadcast.emit('newMessage',generateMessage('Admin','New User Join'));


    socket.on('disconnect',()=>{
       console.log('user disconnected');
    });



    socket.on('createMessage',(message,callback)=>{
        console.log('createMessage',message);
        io.emit('newMessage',generateMessage(message.name,message.text));
       callback();
    });

   socket.on('shareLocation',(coords)=>{
         console.log(coords);
        io.emit('newMessage',generateMessage(coords.name,`Location : ${coords.latitude}, ${coords.longitude}`))
   });

    socket.on('sendMessage',(message)=>{
      console.log(message);
    });
});

server.listen(port,()=>{
   console.log('Server is listing 3000 port');
});
