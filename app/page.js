"use client"

import Content from "@/components/shared/Content";
import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import WhatCanBeDone from "@/components/ui/WhatCanBeDone";
import Darkmode from "@/components/ui/darkmode";

export default function Home() {
  return (
    <main>
      <Hero />

      <Content>
        <WhatCanBeDone />

        <Skills />

        <Projects />
        
        <Darkmode />
        
      </Content>
    </main>
  )
}
