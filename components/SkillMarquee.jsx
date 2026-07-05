import { SKILLS } from "@/constant/global";

const ACCENT = "oklch(66% 0.24 22)";

export default function SkillMarquee() {
  const uniqueSkills = [...new Map(SKILLS.map((s) => [s.name, s])).values()];
  const items = [...uniqueSkills, ...uniqueSkills];

  return (
    <section style={{ padding: "60px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="marquee">
        <div className="marquee-track font-display" style={{ fontSize: 52, fontWeight: 500, letterSpacing: "-0.04em" }}>
          {items.map((s, i) => (
            <span
              key={`${s.name}-${i}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 48, color: i % 4 === 1 ? ACCENT : "var(--fg)" }}
            >
              {s.name}
              <span style={{ width: 8, height: 8, background: "var(--fg-mute)", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
