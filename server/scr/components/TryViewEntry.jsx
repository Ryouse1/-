import React, { useState } from "react";
import CuteButton from "./CuteButton";

export default function TryViewEntry({ trialRoomId }) {
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("");

  const joinTrialView = async () => {
    // APIでお試しルーム参加
    const res = await fetch("/api/rooms/trial/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId: trialRoomId, userId: "あなたのID" })
    });
    const result = await res.json();
    if (result.ok) {
      setJoined(true);
      setMessage("🎀 お試し配信を視聴中です！");
      // ここで配信映像を表示する処理など
    } else {
      setMessage("❌ " + result.message);
    }
  };

  return (
    <div style={{ background: "#e0f7fa", borderRadius: "16px", padding: "18px", boxShadow: "0 2px 8px #ffd6e0" }}>
      <h3 style={{ color: "#00bcd4" }}>お試し視聴ルーム</h3>
      {!joined && <CuteButton onClick={joinTrialView}>お試し視聴する</CuteButton>}
      <div style={{ color: "#c77dff", marginTop: "8px" }}>{message}</div>
      {/* ここに <TrialRoomViewer /> などで配信映像を表示 */}
    </div>
  );
}
