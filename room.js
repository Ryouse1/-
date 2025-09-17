app.post('/api/room', (req, res) => {
  const { type, invitedUsers } = req.body; // type: 'normal' | 'radio' | 'trial'
  const roomId = `room_${Date.now()}`;
  rooms[roomId] = { type, invitedUsers: invitedUsers