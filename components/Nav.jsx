"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Magnet } from "./shared";

const ACCENT = "oklch(66% 0.24 22)";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
      zIndex: 50, width: "min(960px, calc(100% - 32px))",
      transition: "all .35s cubic-bezier(.2,.7,.2,1)",
    }}>
      <div className="glass" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px 10px 22px",
        borderRadius: 999,
        background: scrolled ? "rgba(15,15,17,0.75)" : "rgba(15,15,17,0.45)",
      }}>
        <a href={pathname === "/" ? "#top" : "/"} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--fg)" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: `linear-gradient(135deg, ${ACCENT}, oklch(40% 0.20 22))`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, color: "#0a0a0b",
            boxShadow: `0 0 20px ${ACCENT}55`,
          }}>T</div>
          <span style={{ fontWeight: 500, fontSize: 14, letterSpacing: "-0.01em" }}>thoriq.dev</span>
        </a>

        <div style={{ display: "flex", gap: 4, alignItems: "center" }} className="hide-mobile">
          <a href="#work" className="nav-link" style={{ padding: "8px 14px" }}>Work</a>
          <a href="#stack" className="nav-link" style={{ padding: "8px 14px" }}>Stack</a>
          <a href="#testimonials" className="nav-link" style={{ padding: "8px 14px" }}>Praise</a>
        </div>

        <Magnet strength={0.4}>
          <a href="#contact" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 13 }}>
            Let&apos;s talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="btn-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Magnet>
      </div>
    </nav>
  );
}
