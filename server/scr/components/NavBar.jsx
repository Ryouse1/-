export default function NavBar({ user }) {
  const isFrozen = user.frozenUntil && new Date(user.frozenUntil) > new Date();

  return (
    <nav>
      <span>ようこそ {user.displayName} さん</span>
      {/* 凍結中はログアウトボタン非表示 */}
      {!isFrozen && <button>ログアウト</button>}
    </nav>
  );
}
