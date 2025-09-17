import React, { useState } from "react";
export default function SendStamp({ roomNumber, roomStreamer }) {
  const [msg, setMsg] = useState("");
  async function sendStamp() {
    const res = await fetch(`/api/rooms/${roomNumber}/stamp`, { method: "POST" });
    const result = await res.json();
    setMsg(result.message);
  }
  return (
    <div>
      <button onClick={sendStamp}>スタンプを送る（100円）</button>
      <div>{msg}</div>
    </div>
  );
}