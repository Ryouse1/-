import React, { useState } from "react";
export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  async function register(e) {
    e.preventDefault();
    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: pw, displayName }),
    });
    const result = await res.json();
    setMsg(result.message);
  }
  return (
    <form onSubmit={register}>
      <input type="text" value={username} required placeholder="ユーザー名" onChange={e => setUsername(e.target.value)} />
      <input type="text" value={displayName} required placeholder="表示名" onChange={e => setDisplayName(e.target.value)} />
      <input type="password" value={pw} required placeholder="パスワード" onChange={e => setPw(e.target.value)} />
      <button type="submit">無料登録</button>
      <div style={{ color: "red" }}>{msg}</div>
    </form>
  );
}
