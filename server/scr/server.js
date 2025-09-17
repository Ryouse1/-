// server.js
const express = require('express');
const path = require('path');

const app = express();

// Reactなどのビルド成果物を返す場合
app.use(express.static(path.join(__dirname, 'scr')));
// APIがある場合はここに app.get('/api/xxx', ...) など

// Reactのルートハンドラ
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'scr', 'index.html'));
});

// ポートは必ず process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
