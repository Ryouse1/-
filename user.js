const express = require("express");
const router = express.Router();
const users = require("../models/user");

// ユーザー登録API
router.post("/register", (req, res) => {
  const { username, displayName, password } = req.body;
  if (users.some(u => u.username === username)) {
    return res.status(400).json({ message: "そのユーザー名は既に使われています" });
  }
  users.push({
    username,
    displayName,
    password, // 実際はハッシュ化推奨
    icon: "default.png",
    money: 0,
    frozenUntil: null,
    permanentBan: false,
    freezeReason: null
  });
  res.json({ message: "登録完了！" });
});

// 表示名変更API
router.post("/changeDisplayName", (req, res) => {
  const { displayName } = req.body;
  const user = users.find(u => u.username === req.user.username);
  user.displayName = displayName;
  res.json({ message: "表示名を変更しました" });
});

module.exports = router;