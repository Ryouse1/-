const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/entry', express.static(path.join(__dirname, 'dist')));

// ダミー表示
app.get('*', (req, res) => {
  res.send('<h1>Error 404: Not found</h1>');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
