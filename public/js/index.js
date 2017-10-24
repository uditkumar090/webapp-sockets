var socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});

socket.on('createMessage',(message)=>{
     console.log(message);
});

socket.on('newMessage',(message)=>{
  console.log(message);
});

socket.on('disconnect',()=>{
  console.log('connection terminated');
});
