const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 通常のエントリーページ
app.use('/entry', express.static(path.join(__dirname, '../../entry')));
app.get('/entry', (req, res) => {
  res.sendFile(path.join(__dirname, '../../entry/index.html'));
});

// 存在しないページにアクセスした場合のダミー
app.get('*', (req, res) => {
  res.send('<h1>404 - ページが存在しません</h1><p>保険用のダミーです</p>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
