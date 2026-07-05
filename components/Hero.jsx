"use client";

import { useState, useEffect, useRef } from "react";
import { Magnet } from "./shared";

const ACCENT = "oklch(66% 0.24 22)";

export default function Hero() {
  const [time, setTime] = useState("");
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const glyphRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const opts = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(new Date()));
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (titleRef.current && y < 900) {
        titleRef.current.style.setProperty("--py", `${y * 0.15}px`);
        titleRef.current.style.setProperty(
          "--op",
          `${Math.max(0, 1 - y / 600)}`,
        );
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (!heroRef.current || !glyphRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      const cx = (e.clientX - r.left - r.width / 2) / r.width;
      const cy = (e.clientY - r.top - r.height / 2) / r.height;
      glyphRef.current.style.transform = `translate(${cx * 18}px, ${cy * 18}px)`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero-wrap"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="aurora" />

      <div className="container" style={{ position: "relative", zIndex: 5 }}>
        {/* Status row */}
        <div className="hero-status-row" data-reveal>
          <div className="hero-pill">
            <span className="dot-pulse" />
            <span
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Open to opportunities
            </span>
          </div>
          {/* <div className="hero-pill font-mono" style={{ fontSize: 11 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span>JAKARTA · {time} WIB</span>
          </div> */}
        </div>

        {/* Main kinetic type */}
        <div
          ref={titleRef}
          style={{
            position: "relative",
            transform: "translateY(calc(var(--py, 0px) * -1))",
            opacity: "var(--op, 1)",
            transition: "transform .15s linear",
          }}
        >
          <div className="hero-row" data-reveal>
            <h1 className="hero-bigtype" style={{ display: "inline" }}>
              Software
            </h1>
          </div>

          <div
            className="hero-row"
            data-reveal
            style={{ "--delay": "100ms", marginTop: "0.04em" }}
          >
            <span
              ref={glyphRef}
              className="hero-glyph"
              style={{ transition: "transform .25s cubic-bezier(.2,.7,.2,1)" }}
            >
              <svg
                className="hero-orbit-text"
                viewBox="0 0 200 200"
                style={{ animationDirection: "reverse" }}
              >
                <defs>
                  <path
                    id="circ"
                    d="M 100 100 m -76 0 a 76 76 0 1 1 152 0 a 76 76 0 1 1 -152 0"
                  />
                </defs>
                <text>
                  <textPath href="#circ">
                    WEB · MOBILE · BACKEND · AI ·{" "}
                  </textPath>
                </text>
              </svg>
              <svg
                width="40%"
                height="40%"
                viewBox="0 0 24 24"
                fill="none"
                style={{ position: "relative", zIndex: 2 }}
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="#0a0a0b"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <h1
              className="hero-bigtype outline-text"
              style={{ display: "inline" }}
            >
              engineer
            </h1>
          </div>

          <div
            className="hero-row"
            data-reveal
            style={{ "--delay": "200ms", marginTop: "0.04em" }}
          >
            <h1 className="hero-bigtype" style={{ display: "inline" }}>
              building
            </h1>
            <span
              className="font-serif draw-underline"
              style={{
                fontSize: "clamp(64px, 14vw, 240px)",
                fontStyle: "italic",
                color: ACCENT,
                fontWeight: 400,
                letterSpacing: "-0.04em",
                lineHeight: 0.82,
                textShadow: `0 0 80px ${ACCENT}88`,
              }}
            >
              quietly
            </span>
          </div>

          <div
            className="hero-row"
            data-reveal
            style={{ "--delay": "300ms", marginTop: "0.04em" }}
          >
            <h1
              className="hero-bigtype shine-text"
              style={{ display: "inline" }}
            >
              loud products.
            </h1>
          </div>
        </div>

        {/* Sub-strip */}
        <div
          data-reveal
          className="hero-strip-wrap"
          style={{ "--delay": "450ms", marginTop: 56 }}
        >
          <div className="hero-strip hero-strip-marquee">
            {[0, 1].map((k) => (
              <div key={k} className="hero-strip-track" aria-hidden={k > 0}>
                <span
                  className="font-serif"
                  style={{
                    fontStyle: "italic",
                    color: "var(--fg-dim)",
                    fontSize: "0.5em",
                  }}
                >
                  (also)
                </span>
                <span>web</span>
                <span className="hero-strip-asterisk">✺</span>
                <span style={{ color: "var(--fg-mute)" }}>mobile</span>
                <span className="hero-strip-asterisk">✺</span>
                <span>design eng.</span>
                <span className="hero-strip-asterisk">✺</span>
                <span style={{ color: "var(--fg-mute)" }}>fullstack</span>
                <span
                  className="hero-strip-asterisk"
                  style={{ color: "var(--fg-mute)" }}
                >
                  ✺
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bio + CTA */}
        <div
          style={{ display: "grid", alignItems: "end", marginTop: 64 }}
          className="grid-2-1 hero-bio-grid"
          data-reveal
        >
          <div>
            <p className="hero-bio-text">
              I&apos;m{" "}
              <span style={{ color: "var(--fg)", fontWeight: 500 }}>
                Thoriq Dharmawan
              </span>{" "}
              — a software engineer — web, mobile &amp; AI — building fast,
              clean, and beautifully crafted products.{" "}
              <span className="font-serif" style={{ color: ACCENT }}>
                5+ years
              </span>{" "}
              shipping across the full stack.
            </p>
          </div>
          <div className="hero-cta-buttons">
            <Magnet>
              <a
                href="#work"
                className="btn btn-primary"
                style={{ padding: "16px 24px", fontSize: 14 }}
              >
                View selected work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="btn-arrow"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Magnet>
            <Magnet>
              <a
                href="mailto:thoriqdharmawan378@gmail.com"
                className="btn"
                style={{ padding: "16px 22px", fontSize: 14 }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l9 6 9-6M3 7h18v10H3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
                Email
              </a>
            </Magnet>
          </div>
        </div>

        {/* Live ticker */}
        <div data-reveal style={{ "--delay": "200ms", marginTop: 56 }}>
          <div className="ticker-bar">
            <div className="ticker-cell">
              <span className="ticker-key">Now building</span>
              <a
                href="https://heypico.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="ticker-val"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span style={{ color: ACCENT, marginRight: 6 }}>●</span>
                HeyPico.ai
              </a>
            </div>
            <div className="ticker-cell">
              <span className="ticker-key">Current focus</span>
              <span className="ticker-val">AI integrations · full-stack</span>
            </div>
            <div className="ticker-cell">
              <span className="ticker-key">Based in</span>
              <span className="ticker-val">Indonesia</span>
            </div>
            <div className="ticker-cell">
              <span className="ticker-key">Status</span>
              <span className="ticker-val">Open to work ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
