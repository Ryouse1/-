app.post("/api/rooms/:roomId/comment", (req, res) => {
  const { roomId } = req.params;
  const room = rooms[roomId];
  if (room && room.type === "trial") {
    // お試し視聴ではコメント不可
    return res.status(403).json({ message: "お試し視聴ではコメントできません" });
  }
  // 通常ルームならコメント処理
  // ...
});
