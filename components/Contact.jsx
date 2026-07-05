"use client";

import { useState } from "react";
import { Magnet } from "./shared";

const ACCENT = "oklch(66% 0.24 22)";
const EMAIL = "thoriqd21@gmail.com";

const LINKS = [
  {
    label: "GitHub",
    value: "github.com/thoriqdharmawan",
    href: "https://github.com/thoriqdharmawan",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/thoriqdharmawan",
    href: "https://linkedin.com/in/thoriqdharmawan",
  },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div
          data-reveal="scale"
          className="contact-card"
          style={{
            padding: "80px 60px",
            borderRadius: 32,
            border: "1px solid var(--line-2)",
            background: `radial-gradient(800px 400px at 80% 0%, oklch(66% 0.24 22 / 0.12), transparent 60%), radial-gradient(600px 400px at 0% 100%, oklch(50% 0.18 320 / 0.08), transparent 60%), linear-gradient(180deg, var(--bg-1), var(--bg))`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ghost bg type */}
          <div
            className="font-display"
            aria-hidden
            style={{
              position: "absolute",
              left: -20,
              bottom: -60,
              fontSize: "clamp(120px, 30vw, 360px)",
              lineHeight: 0.8,
              color: "rgba(255,255,255,0.03)",
              letterSpacing: "-0.06em",
              whiteSpace: "nowrap",
            }}
          >
            say hi
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            <span className="label">05 / Contact</span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(44px, 7vw, 110px)",
                lineHeight: 0.92,
                margin: "20px 0 0",
                fontWeight: 500,
                letterSpacing: "-0.04em",
                maxWidth: 900,
              }}
            >
              Let&apos;s build the
              <br />
              <span
                className="font-serif"
                style={{ color: ACCENT, fontWeight: 400 }}
              >
                next quietly
              </span>
              <br />
              loud thing.
            </h2>

            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 50,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Magnet>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn btn-primary"
                  style={{ padding: "18px 28px", fontSize: 15 }}
                >
                  {EMAIL}
                  <svg
                    width="16"
                    height="16"
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

              <button
                className="btn"
                onClick={copy}
                style={{ padding: "18px 24px", fontSize: 14 }}
              >
                {copied ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12l4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="9"
                        y="9"
                        width="11"
                        height="11"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M5 15V5a2 2 0 012-2h10"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    Copy email
                  </>
                )}
              </button>
            </div>

            <div
              style={{
                display: "flex",
                gap: 24,
                marginTop: 60,
                flexWrap: "wrap",
              }}
            >
              {LINKS.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  style={{
                    textDecoration: "none",
                    color: "var(--fg)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: "12px 0",
                    borderTop: "1px solid var(--line)",
                    flex: "1 1 180px",
                    minWidth: 160,
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      color: "var(--fg-mute)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      transition: "color .25s",
                    }}
                  >
                    {value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
