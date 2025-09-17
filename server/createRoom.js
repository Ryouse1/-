function generateRoomNumber() {
  // 例: 5桁のランダム数字
  return Math.floor(10000 + Math.random() * 90000).toString();
}

app.post('/api/rooms', (req, res) => {
  const { type } = req.body; // 'game', 'radio', 'trial' など
  const roomNumber = generateRoomNumber();
  const room = { number: roomNumber, type };
  rooms[roomNumber] = room;
  res.json({ url: `https://${type}.〇〇.render.com/room/${roomNumber}` });
});
