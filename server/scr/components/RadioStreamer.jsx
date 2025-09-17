import React, { useRef, useState } from "react";
import CuteButton from "./CuteButton";

export default function RadioStreamer({ onStreamStart }) {
  const audioRef = useRef();
  const [streaming, setStreaming] = useState(false);

  const startRadio = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioRef.current.srcObject = stream;
      setStreaming(true);
      if (onStreamStart) onStreamStart(stream);
      // WebRTC送信処理
    } catch (err) {
      alert("マイクの利用を許可してください！");
    }
  };

  return (
    <div style={{ background: "#e0f7fa", borderRadius: "18px", padding: "24px", boxShadow: "0 4px 16px #ffe6f2" }}>
      <h2 style={{ color: "#00bcd4" }}>📻 ラジオ配信モード</h2>
      {!streaming && <CuteButton onClick={startRadio}>ラジオ配信開始</CuteButton>}
      <div style={{ margin: "18px 0" }}>
        <audio ref={audioRef} autoPlay controls style={{ borderRadius: "12px" }} />
      </div>
      {/* 波形アニメーションやマイクアイコンのデザイン追加もOK */}
    </div>
  );
}
