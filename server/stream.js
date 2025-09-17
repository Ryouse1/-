io.on('connection', (socket) => {
  socket.on('joinRoom', ({ roomId, isStreamer }) => {
    socket.join(roomId);
    if (isStreamer) {
      socket.roomId = roomId;
      socket.isStreamer = true;
    }
  });

  socket.on('disconnect', () => {
    if (socket.isStreamer && socket.roomId) {
      // 配信者切断時、全員強制退出
      io.to(socket.roomId).emit('forceExit');
    }
  });
});
