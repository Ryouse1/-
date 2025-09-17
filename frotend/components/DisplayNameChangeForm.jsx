import React, { useState } from "react";
export default function DisplayNameChangeForm({ currentDisplayName }) {
  const [displayName, setDisplayName] = useState(currentDisplayName);
  const [msg, setMsg] = useState("");
  async function changeDisplayName(e) {
    e.preventDefault();
    const res = await fetch("/api/user/changeDisplayName", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ displayName }),
    });
    const result = await res.json();
    setMsg(result.message);
  }
  return (
    <form onSubmit={changeDisplayName}>
      <input type="text" value={displayName} required onChange={e => setDisplayName(e.target.value)} />
      <button type="submit">表示名変更</button>
      <div style={{ color: "green" }}>{msg}</div>
    </form>
  );
}
