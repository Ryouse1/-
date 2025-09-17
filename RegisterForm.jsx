import React, { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");

  async function register(e) {
    e.preventDefault();
    const res = await fetch("/api/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: pw }),
    });
    const result = await res.json();
    setMsg(result.message);
  }

  return (
    <form onSubmit={register}>
      <div>
        <input type="text" value={username} required placeholder="ユーザー名" onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
        <input type="password" value={pw} required placeholder="パスワード" onChange={e => setPw(e.target.value)} />
      </div>
      <button type="submit">無料登録</button>
      <div style={{ color: "red" }}>{msg}</div>
    </form>
  );
}