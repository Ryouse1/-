const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// エントリーページ
app.use('/entry', express.static(path.join(__dirname, '../../entry')));
app.get('/entry', (req, res) => {
  res.sendFile(path.join(__dirname, '../../entry/index.html'));
});

// 存在しないURLにアクセスされた場合にダミー表示
app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8">
      <title>Error404 not found</title>
    </head>
    <body>
      <h1>このページは存在しません</h1>
      <p>このページは存在しません。</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
