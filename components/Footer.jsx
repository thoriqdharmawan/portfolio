const ACCENT = "oklch(66% 0.24 22)";
const NAME = "THORIQ";

export default function Footer() {
  return (
    <footer className="footer-wrap" style={{ padding: "80px 0 60px" }}>
      <div className="footer-glow" />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Mega type */}
        <div className="footer-mega" aria-label="Thoriq">
          {NAME.split("").map((letter, i) => (
            <span key={i} className="letter">{letter}</span>
          ))}
        </div>
        <div className="footer-mega outline" aria-hidden style={{ marginTop: "-0.1em" }}>
          {NAME.split("").map((letter, i) => (
            <span key={i} className="letter">{letter}</span>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 20, marginTop: 60, paddingTop: 32,
          borderTop: "1px solid var(--line)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 6,
              background: `linear-gradient(135deg, ${ACCENT}, oklch(40% 0.20 22))`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontWeight: 700, fontSize: 11, color: "#0a0a0b",
            }}>T</div>
            <span className="font-mono" style={{ fontSize: 12, color: "var(--fg-dim)" }}>
              © Thoriq Dharmawan · 2020–2026
            </span>
          </div>
          <div className="font-mono" style={{ fontSize: 12, color: "var(--fg-mute)" }}>
            Designed with obsession · Shipped with care
          </div>
        </div>
      </div>
    </footer>
  );
}
