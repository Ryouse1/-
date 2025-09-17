const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../../public')));

// ルートアクセスで main index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// 新しい HTML を /second で配信
app.get('/second', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/second.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
