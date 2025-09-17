const users = require("../models/user");
function banUserPermanently(username) {
  const user = users.find(u => u.username === username);
  user.permanentBan = true;
  user.frozenUntil = null;
}
// AI検知でBAN（例）
function aiDetect(content, username) {
  // AI判定は省略
  if (/*AI判定不正*/) {
    banUserPermanently(username);
  }
}