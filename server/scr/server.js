const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

const rooms = []; // 初期ルームなし

io.on('connection', (socket) => {
  console.log('新しい接続:', socket.id);

  socket.emit('updateRooms', rooms);

  socket.on('createRoom', (roomName) => {
    const roomId = 'room_' + Date.now();
    const newRoom = { id: roomId, name: roomName, users: 0 };
    rooms.push(newRoom);
    io.emit('updateRooms', rooms);
  });

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    const room = rooms.find(r => r.id === roomId);
    if (room) room.users++;
    io.emit('updateRooms', rooms);
  });

  socket.on('leaveRoom', (roomId) => {
    socket.leave(roomId);
    const room = rooms.find(r => r.id === roomId);
    if (room) room.users = Math.max(room.users - 1, 0);
    io.emit('updateRooms', rooms);
  });

  socket.on('disconnect', () => {
    console.log('切断:', socket.id);
  });
});

server.listen(process.env.PORT || 3001, () => {
  console.log('Server running');
});
