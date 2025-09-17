import React, { useEffect, useState } from "react";
export default function MyBalance() {
  const [money, setMoney] = useState(0);
  useEffect(() => {
    fetch("/api/user/me").then(res => res.json()).then(data => setMoney(data.money));
  }, []);
  return <div>あなたの残高: {money}円</div>;
}