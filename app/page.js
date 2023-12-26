"use client"

import Content from "@/components/shared/Content";
import Libraries from "@/components/ui/Libraries";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
// import Skills from "@/components/ui/Skills";
import WhatCanBeDone from "@/components/ui/WhatCanBeDone";
import Testimonials from "@/components/ui/Testimonials";
import Me from "@/components/ui/Me";

export default function Home() {

  return (
    <main>
      <Hero />

      <Content>
        <Me />

        <WhatCanBeDone />

        {/* <Skills /> */}

        <Projects />

        <Libraries />

        <Testimonials />

      </Content>
    </main>
  )
}
