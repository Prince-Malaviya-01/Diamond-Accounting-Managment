import { Diamond } from "lucide-react";

export default function Shell({ title, subtitle, children, actions }) {
  return (
    <div className="shell">
      <header className="shell-header">
        <div className="shell-header-left">
          <div className="shell-logo">
            <Diamond />
          </div>
          <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
        <div className="shell-actions">{actions}</div>
      </header>
      <main className="shell-main">{children}</main>
    </div>
  );
}
