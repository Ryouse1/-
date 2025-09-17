import React, { useRef, useState } from "react";
import CuteButton from "./CuteButton";

export default function GameStreamRoom() {
  const videoRef = useRef();
  const [streaming, setStreaming] = useState(false);

  const startScreenShare = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    setStreaming(true);
    // WebRTC送信処理をここで実装（PeerJS, SimpleWebRTC等）
  };

  return (
    <div style={{ background: "#ffe6f2", borderRadius: "18px", padding: "24px", boxShadow: "0 4px 16px #ffd6e0" }}>
      <h2 style={{ color: "#c77dff" }}>🎮 ゲーム配信ルーム</h2>
      <CuteButton onClick={startScreenShare}>ゲーム画面を共有</CuteButton>
      <div style={{ margin: "18px 0" }}>
        <video ref={videoRef} autoPlay playsInline width={480} height={270} style={{ borderRadius: "16px", boxShadow: "0 2px 8px #fae3d9" }} />
      </div>
      {/* Live2Dモデル表示領域（例: <canvas id="live2d-canvas" />） */}
      <div>
        <canvas id="live2d-canvas" width="200" height="300" style={{ borderRadius: "12px", background: "#e0f7fa", margin: "12px 0" }}></canvas>
      </div>
      {/* コメント欄やギフト機能もここに追加可能 */}
    </div>
  );
}