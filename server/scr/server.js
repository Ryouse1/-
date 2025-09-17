const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// /entry などアクセスされても何も表示しない
app.get('/entry', (req, res) => res.send(''));

// 他の存在しない URL も空
app.get('*', (req, res) => res.send(''));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
