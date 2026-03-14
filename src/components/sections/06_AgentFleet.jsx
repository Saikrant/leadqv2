import React from 'react';
import { SectionTag, Reveal } from '../ui/UI';
import AnimatedFeatureCarousel from '../ui/AnimatedFeatureCarousel';

export default function AgentFleet() {
  // Unsplash Premium UI/Tech images for the carousel mockups
  const carouselImages = {
    alt: "LeadQ AI Agent Interface",
    // Research Agent
    step1img1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    step1img2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    // Scheduling Agent
    step2img1: "https://images.unsplash.com/photo-1506784951206-ba6ce10ccceb?q=80&w=2069&auto=format&fit=crop",
    step2img2: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    // Voice Agent
    step3img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    // Email Agent
    step4img1: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop",
    step4img2: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop",
    // Meeting AI
    step5img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
  };

  return (
    <section id="agents" className="py-20 relative px-6 overflow-hidden bg-bg">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      
      <Reveal className="text-center max-w-[1100px] mx-auto mb-16 relative z-10">
        <SectionTag>THE SWARM</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2.5rem,5vw,4.5rem)] font-[800] leading-[1.05] tracking-tight">
          Five Agents.<br />
          <span className="text-steel">One Goal: Revenue.</span>
        </h2>
        <p className="mt-4 text-steel text-[18px] max-w-[560px] mx-auto leading-[1.6]">
          Specialized, autonomous, running 24/7. Watch your top-of-funnel execute seamlessly.
        </p>
      </Reveal>

      <Reveal delay={0.2}>
        <AnimatedFeatureCarousel image={carouselImages} />
      </Reveal>

    </section>
  );
}
