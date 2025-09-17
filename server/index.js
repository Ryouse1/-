app.get('/room/:roomName', (req, res) => {
  // ホスト名やサブドメインで分岐
  const host = req.hostname;
  if (
