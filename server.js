const express = require('express');
const app = express();
app.use(express.json());

const users = []; // 仮のユーザーデータ
const rooms = []; // 仮のルームデータ
const reports = []; // 仮の報告履歴

function getUser(username) {
  return users.find(u => u.username === username);
}
function getRoom(roomNumber) {
  return rooms.find(r => r.roomNumber === roomNumber);
}
function saveUser(user) { /* DB保存処理 */ }

app.post('/api/user/register', (req, res) => {
  const { username, password, displayName } = req.body;
  if (users.find(u => u.username === username)) {
    return res.json({ message: "そのユーザー名は既に使われています。" });
  }
  users.push({ username, password, displayName, money: 0, frozenUntil: null, permanentBan: false });
  res.json({ message: "登録完了！" });
});

app.post('/api/user/login', (req, res) => {
  const { username, password } = req.body;
  const user = getUser(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "ユーザー名またはパスワードが違います。" });
  }
  if (user.permanentBan) return res.status(403).json({ message: "無期限凍結されています。" });
  if (user.frozenUntil && new Date(user.frozenUntil) > new Date()) return res.status(403).json({ message: "一時凍結中です。" });
  res.json({ message: "ログイン成功", user });
});

app.get('/api/user/me', (req, res) => {
  // 認証省略
  const user = users[0];
  res.json({ money: user.money });
});

app.post('/api/rooms/:roomNumber/stamp', (req, res) => {
  const room = getRoom(req.params.roomNumber);
  const user = users[0];
  const price = 100;
  if (user.money < price) return res.status(400).json({ message: "残高不足" });
  const streamer = getUser(room.streamer);
  user.money -= price;
  streamer.money += price;
  room.earned += price;
  room.stampCount = (room.stampCount || 0) + 1;
  res.json({ message: "スタンプ送信完了！", myMoney: user.money });
});

app.post('/api/report', (req, res) => {
  const { targetUsername, reason } = req.body;
  const reporterUsername = users[0].username;
  reports.push({ target: targetUsername, reporter: reporterUsername, reason, date: new Date().toISOString() });
  res.json({ message: "報告を受け付けました" });
});

function banUserPermanently(username) {
  const user = getUser(username);
  user.permanentBan = true;
  user.frozenUntil = null;
  saveUser(user);
}

app.listen(3000, () => console.log("API Server started"));