app.post('/api/rooms/:roomNumber/stamp', (req, res) => {
  const room = rooms.find(r => r.roomNumber === req.params.roomNumber);
  if (!room) return res.status(404).send("ルームがありません");
  const viewer = getUser(req.user.username); // 認証必須
  const price = 100; // スタンプ1回の金額（例：100円）

  // 視聴者の残高チェック
  if (viewer.money < price) {
    return res.status(400).json({ message: "残高が足りません" });
  }

  // 残高減算
  viewer.money -= price;

  // 配信者に加算
  const streamer = getUser(room.streamer);
  streamer.money += price;

  // ルームに記録
  room.earned += price;
  room.stampCount = (room.stampCount || 0) + 1;

  res.json({ message: "スタンプを送信しました！", streamerMoney: streamer.money });
});