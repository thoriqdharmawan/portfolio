"use client";

const ACCENT = "oklch(66% 0.24 22)";

const EXPERIENCE = [
  {
    period: "2024 — Now",
    title: "Senior Engineer",
    company: "HeyPico",
    desc: "Building a personal AI platform across mobile and web.",
  },
  {
    period: "2022 — 2024",
    title: "Frontend Engineer",
    company: "Noggin",
    desc: "Led frontend for fleet management and car rental SaaS.",
  },
  {
    period: "2021 — 2022",
    title: "Full-stack Engineer",
    company: "Edot",
    desc: "Built e-commerce and internal tooling for retail clients.",
  },
  {
    period: "2020 — 2021",
    title: "Junior Developer",
    company: "Freelance",
    desc: "Where I learned what `git push --force` actually does.",
  },
];

const PRINCIPLES = [
  {
    tag: "P/01",
    title: "Boring code, sharp UX",
    desc: "I'd rather pick a battle-tested stack and spend my budget on motion, copy, and the parts users actually touch.",
  },
  {
    tag: "P/02",
    title: "Types are not paperwork",
    desc: "If your API contract isn't checked, you're shipping vibes. I lean into TypeScript and codegen.",
  },
  {
    tag: "P/03",
    title: "Ship the seams",
    desc: "The interesting bugs live in offline-first sync, retry logic, and the 200ms after a tap. That's where I focus.",
  },
  {
    tag: "P/04",
    title: "Design is a teammate",
    desc: "I read Figma like prose. The handoff doc is the design doc.",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="label" data-reveal>01 / About</span>

        {/* Two-column: heading+photo / bio+timeline */}
        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: 80,
            alignItems: "start",
            marginTop: 60,
            marginBottom: 80,
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontSize: "clamp(44px, 6vw, 72px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                margin: "0 0 40px",
              }}
            >
              Built for
              <br />
              <span className="font-serif" style={{ color: ACCENT, fontWeight: 400 }}>
                quiet
              </span>{" "}
              craft.
            </h2>

            {/* Portrait placeholder */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--line-2)",
                background: "var(--bg-1)",
                aspectRatio: "3/4",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Red grid pattern */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `linear-gradient(${ACCENT}18 1px, transparent 1px), linear-gradient(90deg, ${ACCENT}18 1px, transparent 1px)`,
                  backgroundSize: "28px 28px",
                  maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
                }}
              />
              <div
                style={{
                  position: "relative",
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: `1px solid ${ACCENT}`,
                  background: `${ACCENT}22`,
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: 10,
                  color: ACCENT,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Portrait — 3:4
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Bio */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--fg-dim)",
                margin: "0 0 56px",
                maxWidth: 480,
              }}
            >
              I write code the way I&apos;d want someone to write it for me —{" "}
              <span style={{ color: ACCENT }}>cautiously, then confidently.</span>{" "}
              I care about{" "}
              <span
                style={{
                  color: ACCENT,
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  textDecorationColor: `${ACCENT}55`,
                }}
              >
                type safety, perceived performance,
              </span>{" "}
              and the small details users feel but never name.
            </p>

            {/* Timeline */}
            <div>
              {EXPERIENCE.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr auto",
                    gap: 24,
                    alignItems: "start",
                    padding: "20px 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, color: "var(--fg-mute)", paddingTop: 2 }}
                  >
                    {e.period}
                  </span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>
                      {e.title}{" "}
                      <span style={{ color: "var(--fg-mute)", fontWeight: 400 }}>at</span>{" "}
                      <span style={{ color: ACCENT }}>{e.company}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--fg-mute)", lineHeight: 1.5 }}>
                      {e.desc}
                    </div>
                  </div>
                  <span
                    className="font-mono"
                    style={{ fontSize: 11, color: "var(--fg-mute)", paddingTop: 2 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div data-reveal>
          <span className="label" style={{ marginBottom: 32, display: "inline-flex" }}>
            Principles
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
              marginTop: 32,
            }}
            className="principles-grid"
          >
            {PRINCIPLES.map((p) => (
              <div
                key={p.tag}
                className="glass"
                style={{ padding: 28, borderRadius: 16 }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    color: ACCENT,
                    letterSpacing: "0.14em",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  {p.tag}
                </span>
                <h4
                  style={{
                    margin: "0 0 12px",
                    fontSize: 16,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    color: "var(--fg-dim)",
                    lineHeight: 1.65,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
