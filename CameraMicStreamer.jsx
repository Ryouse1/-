import React, { useRef, useState } from "react";
import CuteButton from "./CuteButton";

export default function CameraMicStreamer({ onStreamStart }) {
  const videoRef = useRef();
  const [streaming, setStreaming] = useState(false);

  const startCameraMic = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      setStreaming(true);
      if (onStreamStart) onStreamStart(stream);
      // WebRTC送信処理（PeerJS, socket.ioなど）をここで
    } catch (err) {
      alert("カメラ・マイクの利用を許可してください！");
    }
  };

  return (
    <div style={{ background: "#ffe6f2", borderRadius: "18px", padding: "24px", boxShadow: "0 4px 16px #ffd6e0" }}>
      <h2 style={{ color: "#ff80b3" }}>🎀 カメラ＆マイク配信</h2>
      {!streaming && <CuteButton onClick={startCameraMic}>配信開始</CuteButton>}
      <div style={{ margin: "18px 0" }}>
        <video ref={videoRef} autoPlay playsInline width={480} height={270} style={{ borderRadius: "16px", boxShadow: "0 2px 8px #fae3d9" }} />
      </div>
      {/* 音声のみの場合は <audio> でもOK */}
    </div>
  );
}