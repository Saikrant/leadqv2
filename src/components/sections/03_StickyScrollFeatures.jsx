import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTag, Reveal } from '../ui/UI';

const features = [
  {
    id: 0,
    title: "Intelligent Lead Capture",
    tag: "No Setup Needed",
    description: "Scan a business card, tap NFC, or forward an email. LeadQ's Vision AI extracts every field in seconds.",
  },
  {
    id: 1,
    title: "The Agent Swarm",
    tag: "Concurrent Processing",
    description: "Five specialized AI agents run in parallel. From research to outreach, your entire top-of-funnel operates seamlessly without manual triggering.",
  },
  {
    id: 2,
    title: "AI Email Agent",
    tag: "Hyper-Personalized",
    description: "No templates. Each email is dynamically written using live research data and call notes, dynamically adapting tone to recipient seniority.",
  },
  {
    id: 3,
    title: "Scheduling & CRM Sync",
    tag: "Zero Friction",
    description: "Secures meetings in plain text without Calendly links, and automatically logs every interaction bidirectionally to Salesforce or HubSpot.",
  }
];

export default function StickyScrollFeatures() {
  const [activeStep, setActiveStep] = useState(0);

  // Reusable components for the right-hand visual mockups
  const VisualWrapper = ({ children, idKey }) => (
    <div key={idKey} className="absolute inset-0 rounded-[24px] p-[1px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(255,255,255,0.05)] shadow-[0_0_50px_rgba(76,40,220,0.1)] overflow-hidden group">
       <div className="absolute inset-0 bg-[#09090C] rounded-[24px]"></div>
       {/* Tech Grid Background */}
       <div className="absolute inset-0 opacity-[0.04] transition-opacity duration-500 group-hover:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
       {/* Inner top glow line */}
       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#7640DC] to-transparent opacity-60"></div>
       <div className="relative w-full h-full flex items-center justify-center p-8 z-10">
          {children}
       </div>
    </div>
  );

  const Visual0 = () => (
    <VisualWrapper idKey="v0">
      <div className="relative h-64 w-full flex justify-center items-center">
        {/* Phone Mockup */}
        <div className="w-[140px] h-[250px] bg-bg-surface border-[2px] border-[rgba(196,192,232,0.12)] rounded-[24px] relative overflow-hidden shadow-2xl">
          <div className="p-4 w-full h-full flex flex-col gap-3 mt-4">
            <div className="w-[80%] h-4 bg-white/20 rounded animate-[pulse_2s_ease-in-out_infinite]"></div>
            <div className="w-[60%] h-3 bg-purple-light/40 rounded animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
            <div className="w-[90%] h-3 bg-steel/30 rounded animate-[pulse_2s_ease-in-out_infinite_0.4s]"></div>
            <div className="w-[70%] h-3 bg-steel/20 rounded animate-[pulse_2s_ease-in-out_infinite_0.6s]"></div>
          </div>
          {/* Laser Line */}
          <div className="absolute left-0 right-0 h-[2px] bg-[#28C4D4] shadow-[0_0_12px_#28C4D4]" 
               style={{ animation: 'scan 1.4s infinite linear' }}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute bottom-10 right-[-10px] glass border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.1)] text-[#22C55E] text-[13px] font-medium rounded-xl px-4 py-2 shadow-lg"
        >
          ✓ 47 fields extracted
        </motion.div>
      </div>
    </VisualWrapper>
  );

  const Visual1 = () => (
    <VisualWrapper idKey="v1">
      <div className="w-full max-w-[400px]">
        {[
          { n: 'Research', s: 'Enriching 23 profiles', c: '#22C55E', r: '●●●', p: true },
          { n: 'Scheduler', s: '3 meetings negotiated', c: '#22C55E', r: '✓', p: false },
          { n: 'Voice', s: 'LIVE — Call #4 active', c: '#EF4444', r: 'wave', p: true },
          { n: 'Email', s: '8 drafts in queue', c: '#F59E0B', r: '...', p: false },
          { n: 'Meeting AI', s: 'Transcribing: ACE Corp', c: '#22C55E', r: '●', p: true }
        ].map((ag, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={i} 
            className="flex items-center gap-4 py-4 border-b border-[rgba(196,192,232,0.06)] last:border-0"
          >
            <div className={`w-3 h-3 rounded-full ${ag.p ? 'animate-pulse' : ''}`} style={{ backgroundColor: ag.c }}></div>
            <div className="flex-1 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[16px] text-white font-semibold">{ag.n} Agent</span>
                <span className="text-[13px] text-steel">{ag.s}</span>
              </div>
              {ag.r === 'wave' ? (
                <div className="flex items-end gap-[3px] h-[18px]">
                  {[0, 0.1, 0.2, 0.1, 0].map((d, di) => (
                    <motion.div 
                      key={di}
                      animate={{ height: ['4px', '18px', '4px'] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: d, ease: "easeInOut" }}
                      className="w-[4px] bg-[#EF4444] rounded-full"
                    />
                  ))}
                </div>
              ) : (
                <span className={`text-[14px] font-bold ${ag.r === '✓' ? 'text-[#22C55E]' : 'text-steel'}`}>{ag.r}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </VisualWrapper>
  );

  const Visual2 = () => (
    <VisualWrapper idKey="v2">
      <div className="w-full max-w-[440px] relative">
        <div className="bg-bg-surface border border-border rounded-[16px] p-6 shadow-2xl">
          <div className="text-[13px] text-steel border-b border-border pb-3 mb-4">
            <div className="mb-1">To: <span className="text-white">sarah.chen@techflow.io</span></div>
            <div>Subject: <span className="text-white">Scaling SDR velocity at TechFlow</span></div>
          </div>
          <div className="text-[14px] text-steel leading-[1.7]">
            <span className="text-steel">Hi </span><span className="text-purple-light font-semibold">Sarah</span><span>, </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
            >
              I noticed TechFlow recently raised a Series B and is scaling your SDR team. We help RevOps leaders automate top-of-funnel outreach without adding headcount...
            </motion.span>
            <motion.span 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-[8px] h-[16px] bg-purple-light align-middle ml-1"
            />
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-2 mt-4 justify-center"
        >
          <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] text-[#22C55E] text-[12px] font-medium rounded-full px-3 py-1.5">C-Level Tone: Active</div>
          <div className="bg-[rgba(123,111,212,0.1)] border border-[rgba(123,111,212,0.2)] text-purple-light text-[12px] font-medium rounded-full px-3 py-1.5">Personalization: 94%</div>
        </motion.div>
      </div>
    </VisualWrapper>
  );

  const Visual3 = () => (
    <VisualWrapper idKey="v3">
      <div className="w-full max-w-[440px] flex flex-col gap-4">
        {/* Chat bubbles */}
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="self-end bg-[rgba(123,111,212,0.15)] border border-border-purple rounded-[16px_16px_4px_16px] px-4 py-3 text-[14px] max-w-[85%] text-silver shadow-lg"
        >
          Hi Sarah — happy to find a time. Are you free Thursday 2PM or Friday 10AM EST?
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="self-start bg-[rgba(255,255,255,0.04)] border border-border rounded-[16px_16px_16px_4px] px-4 py-3 text-[14px] max-w-[85%] text-steel shadow-lg"
        >
          Thursday doesn't work, but Friday morning is good.
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: 2.0 }}
          className="self-end bg-[rgba(91,79,190,0.5)] border border-[rgba(123,111,212,0.4)] rounded-[16px_16px_4px_16px] px-4 py-3 text-[14px] max-w-[85%] text-white shadow-lg"
        >
          Perfect — calendar invite sent for Friday 10AM EST. See you then! <span className="text-[#22C55E] font-bold ml-1">✓</span>
        </motion.div>

        {/* CRM Sync tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2.8 }}
          className="mt-6 flex items-center justify-center gap-2 bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.15)] rounded-lg py-2 px-4 shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
          <span className="text-[#22C55E] text-[12px] font-medium">Meeting auto-logged to Salesforce</span>
        </motion.div>
      </div>
    </VisualWrapper>
  );

  const visuals = [<Visual0 />, <Visual1 />, <Visual2 />, <Visual3 />];

  return (
    <section id="features" className="py-32 relative bg-bg transition-colors duration-1000" style={{
      backgroundImage: `radial-gradient(circle at 30% 50%, rgba(${
        activeStep === 0 ? '34, 197, 94' : 
        activeStep === 1 ? '76, 40, 220' : 
        activeStep === 2 ? '245, 158, 11' : 
        '123, 111, 212'
      }, 0.03) 0%, transparent 60%)`
    }}>
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <Reveal className="text-center md:text-left flex flex-col items-center md:items-start relative z-10 w-full mb-20 lg:mb-32">
          <SectionTag>HOW LEADQ WORKS</SectionTag>
          <h2 className="mt-4 text-white text-[clamp(2.5rem,5vw,4.5rem)] font-[800] max-w-[800px] leading-[1.05] tracking-tight">
            One connected platform.<br />
            <span className="text-steel">Zero manual effort.</span>
          </h2>
        </Reveal>

        {/* Desktop 2-Column Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-20 relative items-start">
          
          {/* Vertical Progress Track Line */}
          <div className="absolute left-[20px] top-0 bottom-[40vh] w-[2px] bg-gradient-to-b from-transparent via-[rgba(196,192,232,0.1)] to-transparent z-0"></div>

          {/* Left Column: Scrolling Text */}
          <div className="col-span-12 lg:col-span-6 pb-[40vh] relative z-10 ml-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.6, margin: "-20% 0px -20% 0px" }}
                onViewportEnter={() => setActiveStep(index)}
                className="min-h-[70vh] flex flex-col justify-center pr-12 relative"
              >
                {/* Number Indicator - overlapping the track line */}
                <div className={`absolute left-[-52px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-full flex items-center justify-center font-bold text-[18px] transition-all duration-500 z-20
                  ${activeStep === index 
                    ? 'bg-purple text-white shadow-[0_0_20px_rgba(76,40,220,0.6)] scale-110' 
                    : 'bg-[#09090B] text-steel border border-[rgba(196,192,232,0.15)] scale-100'}`}
                >
                  {index + 1}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <SectionTag className="!mt-0 !bg-[rgba(255,255,255,0.02)] !border-[rgba(255,255,255,0.05)] text-steel">{feature.tag}</SectionTag>
                </div>
                <h3 className={`text-[42px] font-bold mb-6 tracking-tight transition-colors duration-500 ${activeStep === index ? 'text-white' : 'text-steel'}`}>
                  {feature.title}
                </h3>
                <p className={`text-[18px] leading-[1.7] transition-colors duration-500 ${activeStep === index ? 'text-silver' : 'text-steel/40'}`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Sticky Visual */}
          <div className="hidden lg:block col-span-12 lg:col-span-6 sticky top-[15vh] h-[70vh]">
            <div className="w-full h-full relative">
              
              {/* Decorative background glow behind the active card */}
              <div className="absolute inset-0 bg-purple/5 blur-[100px] rounded-full scale-150 transform-gpu pointer-events-none transition-opacity duration-1000"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 15, rotateX: 5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -15, rotateX: -5 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                  style={{ perspective: "1000px" }}
                >
                  {visuals[activeStep]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile Layout (Stacked Cards) */}
        <div className="flex flex-col lg:hidden relative pb-[10vh]">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="sticky pt-12 pb-12 bg-bg z-10 transition-all duration-500 rounded-t-[32px] border-t border-[rgba(255,255,255,0.05)] shadow-[0_-15px_40px_rgba(0,0,0,0.6)]"
              style={{ top: `${80 + (index * 16)}px` }} // Shingles/stacks them visually like cards below the sticky navbar
            >
              <div className="flex flex-col px-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center font-bold text-[14px] bg-purple text-white shadow-[0_0_15px_rgba(76,40,220,0.5)] z-20">
                    {index + 1}
                  </div>
                  <SectionTag className="!mt-0 !bg-[rgba(255,255,255,0.02)] !border-[rgba(255,255,255,0.05)] text-steel">{feature.tag}</SectionTag>
                </div>
                <h3 className="text-white text-[32px] font-bold mb-4 tracking-tight leading-[1.1]">{feature.title}</h3>
                <p className="text-steel text-[16px] leading-[1.6] mb-8">{feature.description}</p>
              </div>
              <div className="h-[400px] relative w-full rounded-[24px] overflow-hidden px-4">
                {visuals[index]}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </section>
  );
}
