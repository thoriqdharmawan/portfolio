"use client";

import { useEffect, useRef, useCallback } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    let x = 0, y = 0, tx = 0, ty = 0;
    const handle = (e) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", handle);
    tick();
    return () => {
      window.removeEventListener("mousemove", handle);
      cancelAnimationFrame(raf);
    };
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

export function Magnet({ children, strength = 0.3, ...props }) {
  const ref = useRef(null);
  const handle = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }, [strength]);
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };
  return (
    <div ref={ref} className="magnet" onMouseMove={handle} onMouseLeave={reset} {...props}>
      {children}
    </div>
  );
}
