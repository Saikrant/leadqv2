import React from 'react';
import AuroraBackground from '../ui/AuroraBackground';

export default function Footer() {
  return (
    <footer className="relative bg-transparent overflow-hidden pt-24 mt-20">
      {/* Background Volumetric Light Ribbon */}
      <AuroraBackground style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 50%, black 100%)', maskImage: 'linear-gradient(to top, transparent 0%, transparent 10%, black 50%, black 100%)' }} />

      <div className="relative z-10 max-w-[820px] mx-auto px-6 flex flex-col items-center text-center pb-20">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-white font-bold text-[22px]">LeadQ</span>
          <span className="shimmer font-bold text-[22px]">.AI</span>
        </div>

        {/* Heading with serif italic accent */}
        <h2 className="text-white text-[clamp(2.5rem,6vw,4.2rem)] font-[800] leading-[1.1]">
          Book your demo{' '}
          <span className="font-serif italic text-white/90">today.</span>
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-steel text-[17px] leading-[1.7] max-w-[480px] mx-auto">
          Manage your sales & analytics all in one place and transform your revenue operations with LeadQ's AI agent swarm.
        </p>

        {/* CTA Button */}
        <a href="/contact" className="mt-8 flex items-center justify-center h-[52px] px-10 bg-[#4C28DC] hover:bg-[#5B4FBE] shadow-[0_0_20px_rgba(76,40,220,0.5)] text-white rounded-full text-[16px] font-[700] transition-all duration-300">
          Book Your Demo
        </a>

        {/* Navigation Links */}
        <nav className="mt-10 flex flex-wrap justify-center gap-6 text-[14px] text-steel">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#agents" className="hover:text-white transition-colors">Agents</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>

    </footer>
  );
}
