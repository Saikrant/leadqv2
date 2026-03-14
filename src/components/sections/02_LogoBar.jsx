import React from 'react';

export default function LogoBar() {
  const logos = [
    "SALESFORCE ORG", "HUBSPOT", "500 STARTUPS", "Y COMBINATOR", 
    "A16Z PORTFOLIO", "OPENVIEW", "SAASTR", "SEQUOIA", 
    "TIGER GLOBAL", "ACCEL"
  ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="text-center text-steel text-[12px] uppercase tracking-[0.1em] mb-6">
        Used by leading sales teams globally
      </div>
      
      {/* Scroll Track */}
      <div className="relative flex items-center group">
        <div className="absolute left-0 top-0 bottom-0 w-[160px] z-10 pointer-events-none bg-gradient-to-r from-bg to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[160px] z-10 pointer-events-none bg-gradient-to-l from-bg to-transparent"></div>

        <div className="flex w-max whitespace-nowrap group-hover:![animation-play-state:paused]" style={{ animation: 'ticker 30s linear infinite' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {logos.map((logo, idx) => (
                <span key={idx} className="text-[rgba(196,192,232,0.28)] text-[15px] font-bold tracking-[0.12em] px-10">
                  {logo}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
