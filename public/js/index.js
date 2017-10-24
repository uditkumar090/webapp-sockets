var socket = io();
socket.on('connect',()=>{
  console.log('connected to server');
});


socket.on('newMessage',(message)=>{
     console.log('newMessage',message);
     var li = jQuery('<li></li>');
     li.text(`${message.name} : ${message.text}`);
     jQuery('#list').append(li);
});

socket.on('disconnect',()=>{
  console.log('connection terminated');
});

$('#message-post-action').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage',{
     name:jQuery('[name=username]').val(),
     text:jQuery('[name=message]').val()
   },function(){

   });
});
