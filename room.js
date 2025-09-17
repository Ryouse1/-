const express = require("express");
const router = express.Router();
const rooms = require("../models/room");
const users = require("../models/user");

// スタンプ送信API
router.post("/:roomNumber/stamp", (req, res) => {
  const room = rooms.find(r => r.roomNumber === req.params.roomNumber);
  if (!room) return res.status(404).send("ルームがありません");
  const viewer = users.find(u => u.username === req.user.username);
  const price = 100;
  if (viewer.money < price) return res.status(400).json({ message: "残高不足" });
  const streamer = users.find(u => u.username === room.streamer);
  viewer.money -= price;
  streamer.money += price;
  room.earned += price;
  room.stampCount = (room.stampCount || 0) + 1;
  res.json({ message: "スタンプ送信完了！", streamerMoney: streamer.money });
});
module.exports = router;