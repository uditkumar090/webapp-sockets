var socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});

socket.emit('sendMessage',{
   name:'udit kumar sharma',
   message:'hello'
});

socket.on('createMessage',function(message){
       console.log(message);
});

socket.on('disconnect',()=>{
  console.log('connection terminated');
});
