import React, { useState } from "react";
import CuteButton from "./CuteButton";

export default function TryViewButton({ roomId }) {
  const [status, setStatus] = useState("");

  const joinTrialRoom = async () => {
    const res = await fetch("/api/rooms/trial/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, userId: "あなたのID" })
    });
    const result = await res.json();
    if (result.ok) {
      setStatus("🎀 お試し視聴に参加しました！");
      // ここで配信映像を表示する処理など
    } else {
      setStatus("❌ " + result.message);
    }
  };

  return (
    <div>
      <CuteButton onClick={joinTrialRoom}>お試し視聴</CuteButton>
      <div style={{ color: "#c77dff", marginTop: "8px" }}>{status}</div>
    </div>
  );
}