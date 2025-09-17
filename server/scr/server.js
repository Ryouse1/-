const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// ビルド済み React を配信
app.use(express.static(path.join(__dirname, 'dist')));

// SPA ルーティング対応
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
