// AIが不正検知した場合のBAN処理
function banUserPermanently(username) {
  const user = getUser(username);
  user.permanentBan = true;
  user.frozenUntil = null; // 期限付きBAN解除
  saveUser(user);
}

// ルーム参加/ログイン判定
function isBanned(user) {
  return user.permanentBan === true;
}

app.post('/api/room/:roomNumber/join', (req, res) => {
  const user = getUser(req.user.username);
  if (isBanned(user)) {
    return res.status(403).send("アカウントが無期限凍結されています");
  }
  // 通常参加処理
});