import React, { useState } from "react";

export default function IconUploader() {
  const [iconFile, setIconFile] = useState(null);
  const [msg, setMsg] = useState("");

  async function uploadIcon() {
    if (!iconFile) return;
    const formData = new FormData();
    formData.append("icon", iconFile);

    const res = await fetch("/api/user/upload_icon", {
      method: "POST",
      body: formData,
    });
    const result = await res.json();
    setMsg(result.message);
  }

  function onChangeIcon(e) {
    setIconFile(e.target.files[0]);
  }

  return (
    <div>
      <input type="file" accept="image/png, image/jpeg" onChange={onChangeIcon} />
      <button onClick={uploadIcon}>アイコン画像をアップロード</button>
      <div style={{ color: "red" }}>{msg}</div>
    </div>
  );
}