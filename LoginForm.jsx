import React, { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");

  async function login(e) {
    e.preventDefault();
    const res = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: pw }),
    });
    const result = await res.json();
    setMsg(result.message);
    // トークンなど受け取ったら保存
  }

  return (
    <form onSubmit={login}>
      <input type="text" value={username} required placeholder="ユーザー名" onChange={e => setUsername(e.target.value)} />
      <input type="password" value={pw} required placeholder="パスワード" onChange={e => setPw(e.target.value)} />
      <button type="submit">ログイン</button>
      <div style={{ color: "red" }}>{msg}</div>
    </form>
  );
}