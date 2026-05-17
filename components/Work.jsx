"use client";

import { useState, useRef } from "react";
import { PROJECTS } from "@/constant/global";
import { Magnet } from "./shared";

const ACCENT = "oklch(66% 0.24 22)";

const CARD_COLORS = [
  "oklch(70% 0.20 22)",
  "oklch(65% 0.16 280)",
  "oklch(70% 0.18 145)",
  "oklch(70% 0.14 220)",
  "oklch(72% 0.18 60)",
  "oklch(68% 0.20 30)",
];

function getCategory(slug) {
  if (slug.includes("rn") || slug.includes("expese") || slug.includes("meme-generator")) return "Mobile";
  if (slug.includes("cinema")) return "Design";
  return "Web";
}

function ProjectCard({ p, idx }) {
  const ref = useRef(null);
  const color = CARD_COLORS[idx % CARD_COLORS.length];
  const thumbnail = p.thumbnails?.[0];
  const year = p.createdAt ? new Date(p.createdAt).getFullYear() : "";
  const cat = getCategory(p.slug);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <a
      href={`/projects/${p.slug}`}
      className="project-card"
      ref={ref}
      onMouseMove={handleMove}
      data-reveal
      style={{ "--delay": `${(idx % 2) * 100}ms`, textDecoration: "none", color: "inherit", display: "block" }}
    >
      <div className="card-overlay" />

      {/* Header */}
      <div style={{
        padding: 24, display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: "1px solid var(--line)",
      }}>
        <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>
          P/{String(idx + 1).padStart(2, "0")} · {year}
        </span>
        <span className="tag accent">{cat}</span>
      </div>

      {/* Thumbnail */}
      <div
        className="card-img"
        style={{
          position: "relative", aspectRatio: "16/10",
          background: `linear-gradient(135deg, ${color}22, ${color}05)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderBottom: "1px solid var(--line)", overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${color}11 1px, transparent 1px), linear-gradient(90deg, ${color}11 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
        }} />
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={p.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.88 }}
          />
        ) : (
          <div className="placeholder" style={{ position: "absolute", inset: 0, fontSize: 12 }}>{p.name}</div>
        )}
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "4px 10px", borderRadius: 999,
          background: "rgba(10,10,11,0.65)", backdropFilter: "blur(10px)",
          border: "1px solid var(--line-2)",
          fontFamily: "var(--font-jetbrains-mono)", fontSize: 10, color: "var(--fg-dim)",
        }}>
          {p.role}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: 28 }}>
        <h3 style={{ margin: 0, fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>
          {p.name}
        </h3>
        <p style={{ margin: "0 0 20px", color: "var(--fg-dim)", fontSize: 14, lineHeight: 1.6 }}>
          {p.description.length > 140 ? p.description.slice(0, 140) + "…" : p.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {p.technologies?.slice(0, 4).map((t) => (
            <span key={t.name} className="tag">{t.name}</span>
          ))}
        </div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 16, borderTop: "1px solid var(--line)",
        }}>
          <span style={{ fontSize: 13, color: ACCENT, display: "flex", alignItems: "center", gap: 8 }}>
            View detail
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="btn-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>↗</span>
        </div>
      </div>
    </a>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Web", "Mobile", "Design"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => getCategory(p.slug) === filter);

  return (
    <section id="work">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 30, marginBottom: 60 }}>
          <div data-reveal>
            <span className="label">02 / Selected work</span>
            <h2 className="section-heading">
              Projects I&apos;m<br />
              <span className="font-serif" style={{ color: ACCENT, fontWeight: 400 }}>actually</span> proud of.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }} data-reveal>
            {cats.map((c) => (
              <button key={c} className={`pill ${filter === c ? "active" : ""}`} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="projects-grid">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
