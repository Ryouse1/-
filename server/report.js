app.post('/api/report', (req, res) => {
  const { targetUsername, reason } = req.body;
  const reporterUsername = req.user.username;

  if (!reportReasons.includes(reason)) {
    return res.status(400).json({ message: "無効な報告理由です" });
  }

  // 報告履歴DBに保存
  saveReport({
    target: targetUsername,
    reporter: reporterUsername,
    reason,
    date: new Date().toISOString()
  });

  res.json({ message: "報告を受け付けました" });
});
