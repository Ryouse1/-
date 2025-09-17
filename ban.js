function freezeUser(username, until, reason) {
  const user = getUser(username);
  user.frozenUntil = until;
  user.freezeReason = reason;
  saveUser(user);
}

// 使用例
freezeUser("userA", "2025-09-19T00:00:00Z", "悪口による凍結");