import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AuroraBackground from '../ui/AuroraBackground';

export default function HeroSection() {
  const [liveStats, setLiveStats] = useState({ leads: 47, emails: 23, meetings: 8, calls: 2 });
  const containerRef = useRef(null);

  const { scrollY } = useScroll();

  // Map absolute scroll pixels from top of page
  // At scroll 0 (on load), fully slanted and scaled down.
  // At scroll 600px (scrolling down), fully flat and 100% scale.
  const rotateX = useTransform(scrollY, [0, 600], [25, 0]);
  const scale = useTransform(scrollY, [0, 600], [0.85, 1]);
  const opacity = useTransform(scrollY, [0, 300], [0.4, 1]);
  const y = useTransform(scrollY, [0, 600], [-80, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      const keys = ['leads', 'emails', 'meetings', 'calls'];
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setLiveStats(prev => ({ ...prev, [randomKey]: prev[randomKey] + 1 }));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
  const h1Word = {
    hidden: { filter: 'blur(8px)', opacity: 0, y: 24 },
    show: { filter: 'blur(0px)', opacity: 1, y: 0 }
  };

  const drawChart = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeOut", delay: 1.2 } 
    }
  };

  return (
    <section ref={containerRef} className="min-h-[100svh] relative flex flex-col items-center justify-start pt-[96px] pb-0 text-center overflow-hidden">
      <AuroraBackground />
      
      <div className="relative z-10 max-w-[820px] mx-auto px-6 w-full flex flex-col items-center">
        {/* Top Pill Badge */}
        <motion.a 
          href="#agents"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1 text-[12px] font-medium text-[#A1A1AA] hover:bg-[rgba(255,255,255,0.06)] transition-colors"
        >
          <div className="w-[5px] h-[5px] rounded-full bg-[#22C55E]"></div>
          New Feature: Voice Agent
        </motion.a>

        {/* H1 */}
        <motion.h1 
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 text-[clamp(2.5rem,6vw,60px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#FAFAFA] text-center max-w-[850px]"
        >
          Automate your entire <br />
          sales operation <span className="font-serif italic text-white/90">with AI agents.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 max-w-[540px] mx-auto text-[#A1A1AA] text-[15px] leading-[1.6] font-normal"
        >
          From business card scanned to meeting booked — automatically. LeadQ deploys five AI agents that research leads, write outreach, and close your calendar. Zero manual data entry. Ever.
        </motion.p>

        {/* CTA Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex justify-center gap-4 wrap"
        >
          <a href="/contact" className="flex items-center h-[44px] px-6 bg-[#4C28DC] hover:bg-[#5B4FBE] text-white rounded-[10px] text-[15px] font-medium transition-colors shadow-[0_0_20px_rgba(76,40,220,0.5)]">
            Get Started Free
          </a>
          <a href="/contact" className="flex items-center h-[44px] px-6 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.06)] text-white rounded-[10px] text-[15px] font-medium transition-colors">
            Book Demo
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <span className="text-[#A1A1AA] text-[12px] uppercase tracking-wide">Trusted by 500+ global sales teams</span>
          
          <div className="flex gap-8 items-center text-[#FAFAFA] font-bold text-[18px] opacity-80">
            <div className="flex -space-x-[12px]">
              {['#7B6FD4', '#5B4FBE', '#A89FE0', '#8B87B3', '#C4C0E8'].map((color, i) => (
                <div key={i} className="w-[32px] h-[32px] rounded-full border-[3px] border-bg flex items-center justify-center text-white text-[11px] font-semibold" style={{ background: color }}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* HERO PRODUCT MOCKUP WITH PERSPECTIVE SCROLL */}
      <div 
        className="relative mt-32 max-w-[1180px] w-full mx-auto px-4 z-10"
        style={{ perspective: "1500px" }}
      >
        <motion.div 
          style={{ 
            rotateX, 
            scale, 
            opacity,
            y,
            transformOrigin: "top center" 
          }}
          className="glass-card rounded-[20px] overflow-hidden border border-[rgba(123,111,212,0.25)] shadow-[0_0_0_1px_rgba(196,192,232,0.05),0_60px_120px_rgba(0,0,0,0.7),0_0_80px_rgba(91,79,190,0.15)] bg-bg-card transition-shadow duration-[0.5s]"
        >
          {/* Browser Chrome */}
          <div className="h-10 bg-[rgba(0,0,0,0.5)] flex items-center justify-between px-4">
            <div className="flex gap-1.5">
              <div className="w-[11px] h-[11px] rounded-full bg-[#EF4444]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#F59E0B]"></div>
              <div className="w-[11px] h-[11px] rounded-full bg-[#22C55E]"></div>
            </div>
            <div className="bg-[rgba(255,255,255,0.05)] px-6 py-1 rounded-md text-steel text-[12px]">
              app.leadq.ai/dashboard
            </div>
            <div className="flex gap-2 text-[rgba(139,135,179,0.4)]">
              <div className="w-5 h-5 rounded bg-[rgba(255,255,255,0.05)]"></div>
              <div className="w-5 h-5 rounded bg-[rgba(255,255,255,0.05)]"></div>
              <div className="w-5 h-5 rounded bg-[rgba(255,255,255,0.05)]"></div>
            </div>
          </div>

          {/* Dashboard Interior */}
          <div className="bg-[#06061E] grid grid-cols-1 lg:grid-cols-[56px_1fr_280px] min-h-[460px]">
            {/* SIDEBAR */}
            <div className="hidden lg:flex bg-[rgba(0,0,0,0.4)] border-r border-[rgba(196,192,232,0.06)] flex-col items-center gap-4 py-5">
              <div className="w-6 h-6 rounded-lg bg-[rgba(123,111,212,0.2)] text-purple-light flex items-center justify-center">▤</div>
              <div className="w-6 h-6 text-[rgba(139,135,179,0.35)] flex items-center justify-center">▥</div>
              <div className="w-6 h-6 text-[rgba(139,135,179,0.35)] flex items-center justify-center">▦</div>
              <div className="w-6 h-6 text-[rgba(139,135,179,0.35)] flex items-center justify-center">▧</div>
              <div className="w-6 h-6 text-[rgba(139,135,179,0.35)] flex items-center justify-center">⚙</div>
            </div>

            {/* MAIN PANEL */}
            <div className="flex-1 p-5 text-left">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Leads Today', value: liveStats.leads },
                  { label: 'Emails Sent', value: liveStats.emails },
                  { label: 'Meetings', value: liveStats.meetings },
                  { label: 'Live Calls', value: liveStats.calls }
                ].map((stat, i) => (
                  <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(196,192,232,0.06)] rounded-[10px] p-3 relative overflow-hidden">
                    <div className="text-[10px] text-steel">{stat.label}</div>
                    <div className="text-[18px] text-white font-bold mt-1 flex items-center justify-between">
                      {stat.value}
                      <span className="text-[#22C55E] text-[10px] font-normal flex items-center">↑ +{Math.floor(Math.random()*15)+5}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="h-36 relative mt-6">
                <svg className="w-full h-full" viewBox="0 0 600 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(123,111,212,0.25)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  {[0, 1, 2, 3].map(i => (
                    <line key={i} x1="0" y1={i*40} x2="600" y2={i*40} stroke="rgba(196,192,232,0.05)" />
                  ))}
                  <path d="M0 120 L0 80 Q 100 70, 200 60 T 400 30 T 600 20 L600 120 Z" fill="url(#chartGrad)" />
                  <motion.path 
                    variants={drawChart}
                    initial="hidden"
                    animate="show"
                    d="M0 80 Q 100 70, 200 60 T 400 30 T 600 20" 
                    fill="none" 
                    stroke="#7B6FD4" 
                    strokeWidth="1.5" 
                  />
                </svg>
                <div className="absolute bottom-[-16px] left-0 right-0 flex justify-between text-[9px] text-steel">
                  <span>9AM</span><span>10AM</span><span>11AM</span><span>12PM</span><span>1PM</span><span>2PM</span>
                </div>
              </div>

              {/* Priority Inbox */}
              <div className="mt-8 mb-10 lg:mb-0">
                <div className="text-[10px] uppercase tracking-wider text-steel mb-2">Priority Inbox</div>
                <div className="flex flex-col gap-[6px]">
                  <div className="bg-[rgba(255,255,255,0.02)] rounded-[8px] px-3 py-2 flex items-center gap-2 text-[11px] flex-wrap">
                    <div className="w-2 h-2 rounded-full bg-[#EF4444] shrink-0"></div>
                    <span className="text-white">Sarah Chen — opened proposal 3×</span>
                    <span className="ml-auto bg-[#EF4444]/15 border border-[#EF4444] text-[#EF4444] px-2 py-0.5 rounded text-[9px]">Call Now</span>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] rounded-[8px] px-3 py-2 flex items-center gap-2 text-[11px] flex-wrap">
                    <div className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0"></div>
                    <span className="text-white">Alex Rivera — 5 days silent</span>
                    <span className="ml-auto bg-[rgba(255,255,255,0.05)] border border-border text-silver px-2 py-0.5 rounded text-[9px]">Follow Up</span>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.02)] rounded-[8px] px-3 py-2 flex items-center gap-2 text-[11px] flex-wrap">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0"></div>
                    <span className="text-white">Tom Nguyen — meeting confirmed</span>
                    <span className="ml-auto bg-[rgba(255,255,255,0.05)] border border-border text-silver px-2 py-0.5 rounded text-[9px]">Prep Notes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="hidden lg:block bg-[rgba(0,0,0,0.25)] border-l border-[rgba(196,192,232,0.06)] p-4 text-left">
              <div className="text-[10px] uppercase text-steel mb-3">Agent Status</div>
              <div className="flex flex-col border-t border-[rgba(196,192,232,0.05)]">
                {[
                  { name: 'Research', status: 'Active — 47 profiles', color: '#22C55E' },
                  { name: 'Email', status: '12 drafts queued', color: '#22C55E' },
                  { name: 'Scheduler', status: '3 meetings booked', color: '#22C55E' },
                  { name: 'Voice', status: 'LIVE CALL', color: '#EF4444' },
                  { name: 'Meeting AI', status: 'Transcribing', color: '#22C55E' }
                ].map((agent, i) => (
                  <div key={i} className="flex items-center gap-2 py-2 border-b border-[rgba(196,192,232,0.05)]">
                    <div className={`w-2 h-2 rounded-full ${agent.color === '#EF4444' ? 'animate-pulse bg-[#EF4444]' : 'bg-[#22C55E]'} `}></div>
                    <div>
                      <div className="text-white text-[12px] font-medium">{agent.name}</div>
                      <div className={`text-[11px] ${agent.color === '#EF4444' ? 'text-[#EF4444]' : 'text-steel'}`}>{agent.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[rgba(196,192,232,0.05)]">
                <div className="text-[10px] text-steel uppercase">Total Pipeline Value</div>
                <div className="text-[24px] text-white font-bold mt-1">$2.4M</div>
                <div className="text-[#22C55E] text-[11px]">+18% this week</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
