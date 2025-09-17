const io = require('socket.io')(server);

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => { socket.join(roomId); });
  socket.on('signal', (data) => {
    io.to(data.roomId).emit('signal', data);
  });
});