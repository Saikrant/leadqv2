import React from 'react';
import { Reveal } from '../ui/UI';
import { motion } from 'framer-motion';
import AuroraBackground from '../ui/AuroraBackground';

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden">
      {/* Aurora background */}
      <AuroraBackground style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)', maskImage: 'linear-gradient(to top, transparent 0%, rgba(0,0,0,0.5) 40%, black 100%)' }} />

      {/* Additional blurred pulsing circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(91,79,190,0.22)] rounded-full blur-[140px] pointer-events-none animate-[pulse-glow_6s_ease-in-out_infinite_alternate]" />

      <Reveal className="relative z-10 max-w-[700px] mx-auto">
        <div className="flex items-center justify-center mb-8">
          <span className="text-white font-bold text-[22px]">LeadQ</span>
          <span className="shimmer font-bold text-[22px]">.AI</span>
        </div>

        <h2 className="shimmer text-[clamp(2.5rem,6vw,4.5rem)] font-[800] leading-tight">
          <span className="font-serif italic text-white/90">Book your</span> demo today.
        </h2>

        <p className="mt-5 text-steel text-[18px] leading-[1.7] max-w-[480px] mx-auto">
          Automate your entire top-of-funnel and transform your revenue operations with LeadQ's AI agent swarm.
        </p>

        <button className="mt-10 h-14 px-12 bg-purple hover:bg-purple-light text-white rounded-full text-[16px] font-[700] transition-all duration-300">
          Book Your Demo →
        </button>

        <div className="mt-10 flex flex-wrap gap-4 justify-center items-center text-steel text-[13px]">
          <span>✓ SOC2 Type II</span>
          <span className="text-[rgba(196,192,232,0.25)]">•</span>
          <span>✓ GDPR Ready</span>
          <span className="text-[rgba(196,192,232,0.25)]">•</span>
          <span>✓ 4-min onboarding</span>
          <span className="text-[rgba(196,192,232,0.25)]">•</span>
          <span>✓ No credit card</span>
        </div>
      </Reveal>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-glow {
          0% { opacity: 0.6; transform: translate(-50%, -50%) scale(0.95); }
          100% { opacity: 1.0; transform: translate(-50%, -50%) scale(1.05); }
        }
      `}} />
    </section>
  );
}
