export default function ReportButton({ targetUsername, reasons, onReport }) {
  const [reason, setReason] = useState(reasons[0]);
  return (
    <div>
      <select onChange={e => setReason(e.target.value)} value={reason}>
        {reasons.map(r => <option key={r}>{r}</option>)}
      </select>
      <button onClick={() => onReport(targetUsername, reason)}>報告</button>
    </div>
  );
}
