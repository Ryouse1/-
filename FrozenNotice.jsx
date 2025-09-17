export default function FrozenNotice({ user }) {
  if (!user.frozenUntil && !user.permanentBan) return null;
  return (
    <div style={{ color: "red" }}>
      あなたのアカウントは凍結されています。<br />
      理由: {user.freezeReason || "未記載"}
      <br />
      {user.permanentBan ? "無期限凍結" : `解除予定日時: ${user.frozenUntil}`}
    </div>
  );
}