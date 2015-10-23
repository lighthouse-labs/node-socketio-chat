var socket = io();

$('form').submit(function() {
  var text = $('#you').val() + ' says: ' + $('#m').val();
  socket.emit('message', text);
  $('#m').val('');
  return false;
});

socket.on('message', function(msg) {
  var item = $('<li>').text(msg);
  $('#messages').append(item);
});