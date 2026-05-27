export default function StatCard({ label, value, icon, color = "blue" }) {
  return (
    <article className="stat-card">
      {icon && (
        <div className={`stat-icon ${color}`}>
          {icon}
        </div>
      )}
      <span className="stat-label">{label}</span>
      <strong className="stat-value">{value}</strong>
    </article>
  );
}
