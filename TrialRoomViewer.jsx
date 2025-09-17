import React from "react";

export default function TrialRoomViewer({ streamUrl }) {
  return (
    <div style={{
      background: "#e0f7fa",
      borderRadius: "18px",
      padding: "24px",
      boxShadow: "0 4px 16px #ffe6f2"
    }}>
      <h2 style={{ color: "#00bcd4" }}>🎀 お試し視聴中</h2>
      <video src={streamUrl} controls autoPlay style={{ borderRadius: "16px", width: "100%" }} />
      {/* コメント欄は表示しない */}
      {/* <CommentInput /> はここに出さない */}
      <div style={{
        color: "#c77dff",
        marginTop: "20px",
        fontWeight: "bold"
      }}>
        ※お試し視聴ではコメントできません
      </div>
    </div>
  );
}