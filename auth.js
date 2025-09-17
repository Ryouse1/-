function isFrozen(user) {
  return user.frozenUntil && new Date(user.frozenUntil) > new Date();
}

// ルーム参加API
app.post('/api/room/:roomNumber/join', (req, res) => {
  const user = getUser(req.user.username);
  if (isFrozen(user)) {
    return res.status(403).send("アカウントが凍結されています");
  }
  // 通常参加処理
});