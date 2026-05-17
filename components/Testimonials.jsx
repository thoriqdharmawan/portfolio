import { TESTIMONIALS_DATA } from "@/constant/global";

const ACCENT = "oklch(66% 0.24 22)";

const AVATAR_COLORS = [
  "oklch(70% 0.16 280)",
  "oklch(70% 0.18 145)",
  "oklch(72% 0.20 22)",
  "oklch(70% 0.18 60)",
  "oklch(68% 0.16 200)",
];

export default function Testimonials() {
  const items = TESTIMONIALS_DATA.flat();

  return (
    <section id="testimonials">
      <div className="container">
        <div data-reveal style={{ textAlign: "center", marginBottom: 80 }}>
          <span className="label" style={{ justifyContent: "center" }}>04 / Praise</span>
          <h2 className="section-heading" style={{ textAlign: "center" }}>
            Words from people who<br />
            <span className="font-serif" style={{ color: ACCENT, fontWeight: 400 }}>worked with me.</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="projects-grid">
          {items.map((t, i) => (
            <div
              key={i}
              className="glass"
              data-reveal
              style={{
                "--delay": `${i * 80}ms`,
                padding: 36, borderRadius: 22,
                position: "relative", overflow: "hidden",
              }}
            >
              {/* Quotation mark */}
              <div
                className="font-serif"
                aria-hidden
                style={{
                  position: "absolute", top: -30, right: 20,
                  fontSize: 180, color: ACCENT, opacity: 0.15, lineHeight: 1, fontStyle: "italic",
                }}
              >
                &ldquo;
              </div>

              <p style={{ fontSize: 18, lineHeight: 1.6, margin: "0 0 32px", position: "relative", zIndex: 1 }}>
                {t.text}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg, ${AVATAR_COLORS[i % AVATAR_COLORS.length]}, oklch(30% 0.10 22))`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 600, color: "#0a0a0b",
                }}>
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-mute)" }}>via LinkedIn</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
