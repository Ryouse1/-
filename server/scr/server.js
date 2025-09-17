const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Reactのビルド済みファイルを配信
app.use(express.static(path.join(__dirname, 'client/dist')));

// SPA対応
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
