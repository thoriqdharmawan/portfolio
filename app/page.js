"use client";

import { useReveal, CursorGlow } from "@/components/shared";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SkillMarquee from "@/components/SkillMarquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();

  return (
    <>
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <div className="bg-noise" />
      <CursorGlow />

      <div className="float-shape" style={{ width: 400, height: 400, top: "60%", left: "-10%", animationDelay: "0s" }} />
      <div
        className="float-shape"
        style={{
          width: 300, height: 300, top: "140%", right: "-8%", animationDelay: "-4s",
          background: "radial-gradient(circle, oklch(60% 0.20 320 / 0.4), transparent 70%)",
        }}
      />
      <div className="float-shape" style={{ width: 350, height: 350, top: "220%", left: "50%", animationDelay: "-8s" }} />

      <Nav />
      <Hero />
      <SkillMarquee />
      <About />
      <Work />
      <Stack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
