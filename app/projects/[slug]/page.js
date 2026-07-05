"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useReveal, CursorGlow } from "@/components/shared";
import { PROJECTS } from "@/constant/global";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ACCENT = "oklch(66% 0.24 22)";
const CARD_COLORS = [
  "oklch(70% 0.20 22)", "oklch(65% 0.16 280)", "oklch(70% 0.18 145)",
  "oklch(70% 0.14 220)", "oklch(72% 0.18 60)", "oklch(68% 0.20 30)",
];

function getCategory(slug) {
  if (slug.includes("rn") || slug.includes("expese") || slug.includes("meme-generator")) return "Mobile";
  if (slug.includes("cinema")) return "Design";
  return "Web";
}

function Lightbox({ thumbnails, name, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((p) => (p + 1) % thumbnails.length);
      if (e.key === "ArrowLeft") setIndex((p) => (p - 1 + thumbnails.length) % thumbnails.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [thumbnails.length, onClose]);

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(5,5,7,0.92)", backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24,
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: 20, right: 20,
          width: 44, height: 44, borderRadius: "50%",
          background: "rgba(255,255,255,0.08)", border: "1px solid var(--line-2)",
          color: "var(--fg)", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* Counter */}
      {thumbnails.length > 1 && (
        <div style={{
          position: "absolute", top: 24, left: "50%", transform: "translateX(-50%)",
          fontFamily: "var(--font-jetbrains-mono)", fontSize: 11, color: "var(--fg-dim)",
          background: "rgba(10,10,11,0.7)", backdropFilter: "blur(10px)",
          border: "1px solid var(--line-2)", padding: "4px 12px", borderRadius: 999,
        }}>
          {index + 1} / {thumbnails.length}
        </div>
      )}

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative", maxWidth: "90vw", maxHeight: "85vh",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <img
          src={thumbnails[index]}
          alt={`${name} screenshot ${index + 1}`}
          style={{
            maxWidth: "90vw", maxHeight: "85vh",
            objectFit: "contain", borderRadius: 12,
            border: "1px solid var(--line-2)",
          }}
        />

        {thumbnails.length > 1 && (
          <>
            <button
              onClick={() => setIndex((p) => (p - 1 + thumbnails.length) % thumbnails.length)}
              style={{
                position: "absolute", left: -60, top: "50%", transform: "translateY(-50%)",
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(15,15,17,0.8)", backdropFilter: "blur(12px)",
                border: "1px solid var(--line-2)", color: "var(--fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setIndex((p) => (p + 1) % thumbnails.length)}
              style={{
                position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)",
                width: 44, height: 44, borderRadius: "50%",
                background: "rgba(15,15,17,0.8)", backdropFilter: "blur(12px)",
                border: "1px solid var(--line-2)", color: "var(--fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Thumbnail strip */}
      {thumbnails.length > 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
            display: "flex", gap: 10,
          }}
        >
          {thumbnails.map((src, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{
                width: 64, height: 44, borderRadius: 8, overflow: "hidden",
                border: `1px solid ${i === index ? ACCENT : "var(--line)"}`,
                background: "var(--bg-2)", padding: 0, cursor: "pointer",
                transition: "border-color .2s, transform .2s",
                transform: i === index ? "scale(1.06)" : "scale(1)",
                flexShrink: 0,
              }}
            >
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}

function ImageGallery({ thumbnails, name }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  if (!thumbnails?.length) return null;

  return (
    <div data-reveal style={{ marginBottom: 80 }}>
      {lightbox !== null && (
        <Lightbox
          thumbnails={thumbnails}
          name={name}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Main image */}
      <div
        onClick={() => setLightbox(active)}
        style={{
          width: "100%", aspectRatio: "16/9",
          borderRadius: 20, overflow: "hidden",
          border: "1px solid var(--line)",
          background: "var(--bg-2)",
          position: "relative",
          cursor: "zoom-in",
        }}
      >
        <img
          src={thumbnails[active]}
          alt={`${name} screenshot ${active + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Zoom hint */}
        <div style={{
          position: "absolute", top: 16, left: 16,
          padding: "4px 10px", borderRadius: 999,
          background: "rgba(10,10,11,0.65)", backdropFilter: "blur(10px)",
          border: "1px solid var(--line-2)",
          fontFamily: "var(--font-jetbrains-mono)", fontSize: 10, color: "var(--fg-dim)",
          display: "flex", alignItems: "center", gap: 6,
          pointerEvents: "none",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Click to expand
        </div>

        {thumbnails.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev - 1 + thumbnails.length) % thumbnails.length); }}
              style={{
                position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(15,15,17,0.7)", backdropFilter: "blur(12px)",
                border: "1px solid var(--line-2)", color: "var(--fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setActive((prev) => (prev + 1) % thumbnails.length); }}
              style={{
                position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
                width: 40, height: 40, borderRadius: "50%",
                background: "rgba(15,15,17,0.7)", backdropFilter: "blur(12px)",
                border: "1px solid var(--line-2)", color: "var(--fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .2s",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
        {/* Counter */}
        {thumbnails.length > 1 && (
          <div style={{
            position: "absolute", bottom: 16, right: 16,
            padding: "4px 10px", borderRadius: 999,
            background: "rgba(10,10,11,0.7)", backdropFilter: "blur(10px)",
            border: "1px solid var(--line-2)",
            fontFamily: "var(--font-jetbrains-mono)", fontSize: 11, color: "var(--fg-dim)",
          }}>
            {active + 1} / {thumbnails.length}
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {thumbnails.length > 1 && (
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          {thumbnails.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: 80, height: 52, borderRadius: 10, overflow: "hidden",
                border: `1px solid ${i === active ? ACCENT : "var(--line)"}`,
                background: "var(--bg-2)", padding: 0, cursor: "pointer",
                transition: "border-color .25s, transform .25s",
                transform: i === active ? "scale(1.04)" : "scale(1)",
                flexShrink: 0,
              }}
            >
              <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail({ params }) {
  useReveal();
  const { slug } = params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];
  const color = CARD_COLORS[projectIndex % CARD_COLORS.length];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  if (!project) {
    return (
      <>
        <div className="bg-mesh" />
        <div className="bg-grid" />
        <Nav />
        <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>
              404
            </div>
            <h1 style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.04em", margin: "0 0 20px" }}>Project not found</h1>
            <a href="/#work" className="btn btn-primary">← Back to work</a>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const year = project.createdAt ? new Date(project.createdAt).getFullYear() : "";
  const cat = getCategory(slug);
  const idx = projectIndex + 1;

  return (
    <>
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <div className="bg-noise" />
      <CursorGlow />

      <div className="float-shape" style={{ width: 400, height: 400, top: "10%", right: "-15%", animationDelay: "0s" }} />

      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 140, paddingBottom: 60, position: "relative", zIndex: 3 }}>
        <div className="container">
          {/* Back link */}
          <a
            href="/#work"
            data-reveal
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "var(--fg-dim)", textDecoration: "none", fontSize: 14,
              marginBottom: 48, transition: "color .25s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--fg)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--fg-dim)"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-mono" style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              All projects
            </span>
          </a>

          {/* Meta row */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }} data-reveal>
            <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>
              P/{String(idx).padStart(2, "0")}
            </span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--fg-mute)", display: "inline-block" }} />
            <span className="tag accent">{cat}</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--fg-mute)", display: "inline-block" }} />
            <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>{year}</span>
          </div>

          {/* Title */}
          <h1
            data-reveal
            style={{
              fontSize: "clamp(36px, 6vw, 88px)", fontWeight: 500,
              letterSpacing: "-0.04em", lineHeight: 1.0,
              margin: "0 0 32px", maxWidth: 900,
            }}
          >
            {project.name}
          </h1>

          {/* Role + tech + link row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20, marginBottom: 60 }} data-reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 16px", borderRadius: 999,
                border: "1px solid var(--line-2)", background: "rgba(255,255,255,0.03)",
              }}>
                <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Role
                </span>
                <span style={{ fontSize: 14, fontWeight: 500, color: ACCENT }}>{project.role}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.technologies?.slice(0, 5).map((t) => (
                  <span key={t.name} className="tag">{t.name}</span>
                ))}
              </div>
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "12px 22px", fontSize: 13 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {project.urlLabel || "View live"}
              </a>
            )}
          </div>

          {/* Thumbnail divider */}
          <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--line-2), transparent)", marginBottom: 60 }} />
        </div>
      </section>

      {/* Gallery */}
      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <ImageGallery thumbnails={project.thumbnails} name={project.name} />

        {/* Content grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 80, alignItems: "start" }}
          className="grid-2-1"
        >
          {/* Description + Responsibilities */}
          <div>
            <div data-reveal style={{ marginBottom: 60 }}>
              <span className="label" style={{ marginBottom: 24, display: "inline-flex" }}>Overview</span>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--fg-dim)", margin: "24px 0 0" }}>
                {project.description}
              </p>
            </div>

            {project.responsibility?.length > 0 && (
              <div data-reveal>
                <span className="label" style={{ marginBottom: 24, display: "inline-flex" }}>Responsibilities</span>
                <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 0 }}>
                  {project.responsibility.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex", alignItems: "baseline", gap: 16,
                        padding: "18px 0", borderBottom: "1px solid var(--line)",
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-mute)", flexShrink: 0 }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--fg-dim)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            {/* Project info card */}
            <div className="glass" data-reveal style={{ padding: 28, borderRadius: 18, marginBottom: 24 }}>
              <h4 style={{ margin: "0 0 20px", fontSize: 14, fontWeight: 500, color: "var(--fg-dim)" }}>Project info</h4>
              {[
                { label: "Year", value: year },
                { label: "Role", value: project.role },
                { label: "Category", value: cat },
                { label: "Status", value: project.url ? "Live" : "Archived" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "12px 0", borderBottom: "1px solid var(--line)",
                  }}
                >
                  <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
                  <span style={{ fontSize: 13, color: value === "Live" ? "oklch(74% 0.18 145)" : "var(--fg)" }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Full tech stack */}
            <div className="glass" data-reveal style={{ "--delay": "100ms", padding: 28, borderRadius: 18 }}>
              <h4 style={{ margin: "0 0 20px", fontSize: 14, fontWeight: 500, color: "var(--fg-dim)" }}>Tech stack</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.technologies?.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      display: "flex", alignItems: "center", gap: 8,
                      padding: "8px 12px", borderRadius: 999,
                      border: "1px solid var(--line)",
                      background: "rgba(255,255,255,0.02)",
                      transition: "border-color .25s, background .25s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.background = "rgba(255,255,255,0.02)"; }}
                  >
                    {t.src && (
                      <img src={t.src} alt="" style={{ width: 16, height: 16, objectFit: "contain" }} />
                    )}
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-dim)" }}>{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project navigation */}
        <div style={{ margin: "100px 0 80px", paddingTop: 60, borderTop: "1px solid var(--line)" }}>
          <div className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 32, textAlign: "center" }}>
            More projects
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="projects-grid">
            {prevProject && (
              <a
                href={`/projects/${prevProject.slug}`}
                style={{
                  padding: 28, borderRadius: 20,
                  border: "1px solid var(--line)", background: "rgba(255,255,255,0.015)",
                  textDecoration: "none", color: "inherit",
                  display: "flex", flexDirection: "column", gap: 12,
                  transition: "border-color .3s, transform .3s, background .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = ""; e.currentTarget.style.background = "rgba(255,255,255,0.015)"; }}
              >
                <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>← Previous</span>
                <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em" }}>{prevProject.name}</span>
                <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>{prevProject.role}</span>
              </a>
            )}
            {nextProject && (
              <a
                href={`/projects/${nextProject.slug}`}
                style={{
                  padding: 28, borderRadius: 20,
                  border: "1px solid var(--line)", background: "rgba(255,255,255,0.015)",
                  textDecoration: "none", color: "inherit",
                  display: "flex", flexDirection: "column", gap: 12,
                  textAlign: "right", marginLeft: prevProject ? 0 : "auto",
                  transition: "border-color .3s, transform .3s, background .3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--line-2)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--line)"; e.currentTarget.style.transform = ""; e.currentTarget.style.background = "rgba(255,255,255,0.015)"; }}
              >
                <span className="font-mono" style={{ fontSize: 10, color: "var(--fg-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Next →</span>
                <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em" }}>{nextProject.name}</span>
                <span className="font-mono" style={{ fontSize: 11, color: "var(--fg-mute)" }}>{nextProject.role}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
