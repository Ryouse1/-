import React, { useEffect, useState } from "react";
import { getMoney, setMoney } from "../utils/moneyCookie";

// 今日の日付（YYYY-MM-DD）
function getToday() {
  return new Date().toISOString().slice(0,10);
}

export default function LoginBonus() {
  const [bonus, setBonus] = useState(0);
  const [streak, setStreak] = useState(1);

  useEffect(() => {
    const today = getToday();
    const lastDate = localStorage.getItem("lastLoginDate") || "";
    let loginStreak = parseInt(localStorage.getItem("loginStreak") || "1", 10);

    if (lastDate === today) {
      // すでに今日受け取った
      setBonus(0);
      setStreak(loginStreak);
      return;
    }

    // 連続判定（昨日の日付と比較）
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
    if (lastDate === yesterday) {
      loginStreak = Math.min(loginStreak + 1, 10);
    } else {
      loginStreak = 1; // 切れたら1日にリセット
    }

    setStreak(loginStreak);

    // 今回のボーナス額
    const bonusAmount = loginStreak * 100;

    // ボーナス表示
    setBonus(bonusAmount);

    // ローカルストレージ更新（受け取ったら1日にリセットするので保存はここではしない）
  }, []);

  // ボーナス受け取り処理
  function receiveBonus() {
    const today = getToday();
    // 所持金加算
    const nowMoney = getMoney();
    setMoney(nowMoney + bonus);

    // streakを1にリセット
    localStorage.setItem("lastLoginDate", today);
    localStorage.setItem("loginStreak", "1");
    setStreak(1);
    setBonus(0);
  }

  if (!bonus) return null;
  return (
    <div style={{
      background: "#ffe4c4", padding: "12px", borderRadius: "10px", margin: "10px 0"
    }}>
      <div>
        🎉 連続ログイン {streak}日目ボーナス！ {bonus}円ゲットできます
      </div>
      <button onClick={receiveBonus}>
        ボーナスを受け取る
      </button>
    </div>
  );
}
