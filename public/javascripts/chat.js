$(function(){
  var socket = io();
  $(".chatBox").submit(function(event){
    event.preventDefault();
    var message = $("#message").val();
    socket.emit('chat message', message);
    $("#message").val("");
    return false;
  });

  socket.on('chat message', function(data){
    $("#messages").append(`<li>${data}</li>`);
  });
});
