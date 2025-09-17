const http = require('http');

const server = http.createServer((req, res) => {
  // ステータスコードとヘッダだけ送ってレスポンス終了
  res.writeHead(204); // 204 No Content
  res.end();
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running silently on port ${PORT}`);
});
