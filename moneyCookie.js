// お金をクッキーに保存
export function setMoney(amount) {
  document.cookie = `money=${amount}; path=/; max-age=31536000`;
}

// クッキーからお金を取得
export function getMoney() {
  const match = document.cookie.match(/(?:^|; )money=(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}