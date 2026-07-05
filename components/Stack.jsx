import { SKILLS } from "@/constant/global";

const ACCENT = "oklch(66% 0.24 22)";

const GROUPS = [
  { name: "Languages", keys: ["Typescript", "Javscript"] },
  { name: "Frontend Frameworks", keys: ["NextJs", "ReactJs", "Vite"] },
  { name: "UI Libraries", keys: ["Tailwind", "MaterialUI", "AntDesign", "Styled Component"] },
  { name: "State & Forms", keys: ["Redux", "React Hook Form", "Formik", "React Router"] },
  { name: "Backend & APIs", keys: ["Node.js", "Graphql", "Hasura", "Express.js", "SQL"] },
  { name: "Mobile", keys: ["React Native", "Expo"] },
  { name: "AI & LLM", keys: ["OpenAI API", "LangChain"] },
  { name: "Tools", keys: ["Figma"] },
];

function groupSkills() {
  const skillMap = new Map(SKILLS.map((s) => [s.name, s]));
  return GROUPS.map((g) => ({
    ...g,
    items: g.keys.map((k) => skillMap.get(k)).filter(Boolean),
  })).filter((g) => g.items.length > 0);
}

export default function Stack() {
  const groups = groupSkills();

  return (
    <section id="stack" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="container">
        <div data-reveal style={{ marginBottom: 60, maxWidth: 720 }}>
          <span className="label">03 / Stack</span>
          <h2 className="section-heading">
            What I reach for<br />
            <span className="font-serif" style={{ color: ACCENT, fontWeight: 400 }}>first.</span>
          </h2>
          <p style={{ marginTop: 24, color: "var(--fg-dim)", fontSize: 17, lineHeight: 1.55, maxWidth: 560 }}>
            Tools I keep coming back to — picked for predictable trade-offs, not hype.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="stack-grid">
          {groups.map((g, i) => (
            <div
              key={g.name}
              className="glass"
              data-reveal
              style={{ "--delay": `${i * 60}ms`, padding: 28, borderRadius: 18 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 500 }}>{g.name}</h4>
                <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-mute)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.items.map((skill) => (
                  <span key={skill.name} className="tag">{skill.name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
