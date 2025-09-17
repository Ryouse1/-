import React from "react";
import CuteButton from "./CuteButton";

export default function TryStreamStarter({ onStart }) {
  return (
    <div style={{ background: "#fff7d6", borderRadius: "18px", padding: "18px", boxShadow: "0 2px 8px #ffd6e0" }}>
      <h2 style={{ color: "#ff80b3" }}>🎀 お試し配信</h2>
      <p>本番配信の前に動作確認や練習ができます。</p>
      <CuteButton onClick={onStart}>お試し配信開始</CuteButton>
    </div>
  );
}