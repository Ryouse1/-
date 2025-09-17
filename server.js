const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let rooms = {};

app.use(express.json());

// 部屋作成API
app.post('/api/rooms', (req, res) => {
  const roomId = `room_${Date.now()}`;
  rooms[roomId] = { comments: [] };
  res.json({ roomId });
});

// 部屋ごとのコメントWebSocket
io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });
  socket.on('sendComment', ({ roomId, user, comment }) => {
    rooms[roomId].comments.push({ user, comment });
    io.to(roomId).emit('newComment', { user, comment });
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});