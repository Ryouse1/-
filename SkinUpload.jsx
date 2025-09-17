import React, { useState } from 'react';
import CuteButton from './CuteButton';

export default function SkinUpload({ onSkinUploaded }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();

  const handleUpload = async () => {
    if (!file) return;
    const form = new FormData();
    form.append('skin', file);
    const res = await fetch('/api/skins/upload', { method: 'POST', body: form });
    const result = await res.json();
    if (result.ok) {
      setMessage("🎀 スキンが使えます！");
      onSkinUploaded(result.skinUrl);
    } else {
      setMessage("❌ このスキンは使えません。条件を満たしていません。");
    }
  };
  return (
    <div style={{ background: "#fff7d6", borderRadius: "14px", padding: "16px", boxShadow: "0 2px 12px #ffe6f2" }}>
      <input type="file" accept=".zip,.moc3,.model3.json" onChange={e => setFile(e.target.files[0])} />
      <CuteButton onClick={handleUpload}>アップロード</CuteButton>
      <div style={{ color: "#c77dff", marginTop: "8px" }}>{message}</div>
    </div>
  );
}