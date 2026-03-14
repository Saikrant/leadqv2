import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTag, Reveal } from '../ui/UI';

export default function BentoFeatures() {
  const bentoContainer = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
  const bentoItem = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="features" className="py-28 max-w-[1200px] mx-auto px-6">
      <Reveal className="text-center md:text-left flex flex-col items-center md:items-start relative z-10 w-full">
        <SectionTag>FEATURES</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800] max-w-[600px] leading-tight">
          Track the things that matter most.
        </h2>
        <p className="mt-4 text-steel text-[17px] leading-[1.75] max-w-[520px]">
          From lead capture to pipeline close, LeadQ gives you total control with zero manual effort.
        </p>
      </Reveal>

      <motion.div 
        variants={bentoContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-auto gap-4"
      >
        {/* CARD A — Intelligent Lead Capture */}
        <motion.div variants={bentoItem} className="lg:col-span-7 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[380px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>No Setup Needed</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">Intelligent Lead Capture</h3>
          <p className="text-steel text-[14px] mt-2 max-w-[400px]">
            Scan a business card, tap NFC, or forward an email. LeadQ's Vision AI extracts every field in seconds.
          </p>

          <div className="mt-6 relative h-44 overflow-hidden flex justify-center">
            {/* Phone Mockup */}
            <div className="w-[100px] h-[180px] bg-bg-surface border-[2px] border-[rgba(196,192,232,0.12)] rounded-[20px] relative">
              <div className="p-3 w-full h-full flex flex-col gap-2">
                <div className="w-[80%] h-3 bg-white/20 rounded animate-[pulse_2s_ease-in-out_infinite]"></div>
                <div className="w-[60%] h-2 bg-purple-light/40 rounded animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
                <div className="w-[90%] h-2 bg-steel/30 rounded animate-[pulse_2s_ease-in-out_infinite_0.4s]"></div>
              </div>
              {/* Laser Line */}
              <div className="absolute left-0 right-0 h-[2px] bg-[#28C4D4] shadow-[0_0_8px_#28C4D4]" 
                   style={{ animation: 'scan 1.4s infinite linear' }}></div>
            </div>

            <motion.div 
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 right-0 lg:right-10 glass border-[rgba(34,197,94,0.3)] text-[#22C55E] text-[11px] rounded-lg px-3 py-1.5"
            >
              ✓ 47 fields extracted — 96% confidence
            </motion.div>
          </div>
        </motion.div>

        {/* CARD B — Research Agent */}
        <motion.div variants={bentoItem} className="lg:col-span-5 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[380px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>Real-Time Intelligence</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">Profile Research Engine</h3>
          <p className="text-steel text-[14px] mt-2">
            Pulls from LinkedIn, SEC filings, press releases and 40+ sources. Full enrichment in under 60 seconds.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            {[
              { i: '🔗', l: 'LinkedIn', v: 'VP Sales, TechFlow' },
              { i: '🏢', l: 'Company', v: 'Series B, $24M raised' },
              { i: '📧', l: 'Email', v: 's.chen@techflow.io' },
              { i: '📍', l: 'Location', v: 'San Francisco, CA' }
            ].map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.3, repeat: Infinity, repeatDelay: 5, repeatType: 'reverse' }}
                className="bg-[rgba(255,255,255,0.03)] border border-border rounded-lg px-3 py-2 text-[12px] flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span>{row.i}</span>
                  <span className="text-steel">{row.l}</span>
                  <span className="text-white ml-2">{row.v}</span>
                </div>
                <span className="text-[#22C55E] font-bold">✓</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CARD C — Agent Activity */}
        <motion.div variants={bentoItem} className="lg:col-span-5 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[360px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>The Swarm</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">Five Agents, Running Concurrently</h3>
          <p className="text-steel text-[14px] mt-2">
            Each agent is specialized. Together they automate your entire top-of-funnel in parallel.
          </p>

          <div className="mt-6">
            {[
              { n: 'Research', s: 'Enriching 23 profiles', c: '#22C55E', r: '●●●', p: true },
              { n: 'Scheduler', s: '3 meetings negotiated', c: '#22C55E', r: '✓', p: false },
              { n: 'Voice', s: 'LIVE — Call #4 active', c: '#EF4444', r: 'wave', p: true },
              { n: 'Email', s: '8 drafts in queue', c: '#F59E0B', r: '...', p: false },
              { n: 'Meeting AI', s: 'Transcribing: ACE Corp', c: '#22C55E', r: '●', p: true }
            ].map((ag, i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-[rgba(196,192,232,0.06)] last:border-0">
                <div className={`w-2 h-2 rounded-full ${ag.p ? 'animate-pulse' : ''}`} style={{ backgroundColor: ag.c }}></div>
                <div className="flex-1 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] text-white font-medium">{ag.n}</span>
                    <span className="text-[11px] text-steel">{ag.s}</span>
                  </div>
                  {ag.r === 'wave' ? (
                    <div className="flex items-end gap-[2px] h-[14px]">
                      {[0, 0.1, 0.2, 0.1, 0].map((d, di) => (
                        <motion.div 
                          key={di}
                          animate={{ height: ['4px', '14px', '4px'] }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: d, ease: "easeInOut" }}
                          className="w-[3px] bg-[#EF4444] rounded-full"
                        />
                      ))}
                    </div>
                  ) : (
                    <span className={`text-[12px] font-bold ${ag.r === '✓' ? 'text-[#22C55E]' : 'text-steel'}`}>{ag.r}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CARD D — Email Intelligence */}
        <motion.div variants={bentoItem} className="lg:col-span-7 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[360px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>Hyper-Personalized</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">AI Email Agent</h3>
          <p className="text-steel text-[14px] mt-2 max-w-[440px]">
            No templates. Each email dynamically written using research data + call notes. Tone adapts to recipient seniority.
          </p>

          <div className="mt-6 relative">
            <div className="bg-bg-surface border border-border rounded-[12px] p-4">
              <div className="text-[11px] text-steel border-b border-border pb-2 mb-2">
                <div>To: sarah.chen@techflow.io</div>
                <div>Subject: Your GTM challenge...</div>
              </div>
              <div className="text-[12px] text-steel leading-[1.6]">
                <span className="text-steel">Hi </span><span className="text-purple-light font-semibold">Sarah</span><span>, </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                >
                  I noticed TechFlow recently raised a Series B and is scaling your SDR team — we help RevOps leaders...
                </motion.span>
                <motion.span 
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-[6px] h-[12px] bg-purple-light align-middle ml-1"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] text-[#22C55E] text-[10px] rounded-full px-2 py-1">C-Level Tone: Active</div>
              <div className="bg-[rgba(123,111,212,0.1)] border border-[rgba(123,111,212,0.2)] text-purple-light text-[10px] rounded-full px-2 py-1">Personalization: 94%</div>
              <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-steel text-[10px] rounded-full px-2 py-1">Send: Queued</div>
            </div>
          </div>
        </motion.div>

        {/* CARD E — Calendar Negotiation */}
        <motion.div variants={bentoItem} className="lg:col-span-6 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[320px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>Zero Friction</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">Scheduling Agent</h3>
          <p className="text-steel text-[14px] mt-2">
            Proposes times in plain email text. Handles the back and forth. Secures the meeting — no Calendly link ever sent.
          </p>

          <div className="mt-6 flex flex-col gap-3 h-[130px] overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="self-end bg-[rgba(123,111,212,0.15)] border border-border-purple rounded-[12px_12px_4px_12px] px-3 py-2 text-[12px] max-w-[85%] text-silver"
            >
              Hi Sarah — happy to find a time. Are you free Thursday 2PM or Friday 10AM EST?
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="self-start bg-[rgba(255,255,255,0.04)] border border-border rounded-[12px_12px_12px_4px] px-3 py-2 text-[12px] max-w-[85%] text-steel"
            >
              Thursday doesn't work, but Friday morning is good.
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.4 }}
              className="self-end bg-[rgba(91,79,190,0.5)] border border-[rgba(123,111,212,0.4)] rounded-[12px_12px_4px_12px] px-3 py-2 text-[12px] max-w-[85%] text-white"
            >
              Perfect — calendar invite sent for Friday 10AM EST. See you then! <span className="text-[#22C55E] font-bold">✓</span>
            </motion.div>
          </div>
        </motion.div>

        {/* CARD F — CRM Sync */}
        <motion.div variants={bentoItem} className="lg:col-span-6 lg:row-span-1 glass-card overflow-hidden rounded-[20px] relative group p-8 lg:h-[320px] hover:-translate-y-1 hover:border-border-hover transition-all duration-300">
          <SectionTag>Always Accurate</SectionTag>
          <h3 className="text-white text-[22px] font-bold mt-4">Bi-Directional CRM Sync</h3>
          <p className="text-steel text-[14px] mt-2">
            Every interaction auto-logged. Zero data entry. If updated in Salesforce, LeadQ detects and reconciles.
          </p>

          <div className="mt-6 flex flex-col">
            {[
              { c: '#22C55E', t: 'Sarah Chen updated in Salesforce ✓', a: '2s ago' },
              { c: '#7B6FD4', t: 'Meeting notes logged to HubSpot ✓', a: '47s ago' },
              { c: '#3B82F6', t: 'Follow-up task created: +3 days ✓', a: '2m ago' }
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-[rgba(196,192,232,0.05)] text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: row.c }}></div>
                  <span className="text-silver">{row.t}</span>
                </div>
                <span className="text-steel">{row.a}</span>
              </div>
            ))}
            
            <div className="flex gap-2 mt-4">
              {['Salesforce', 'HubSpot', 'Dynamics 365'].map(b => (
                <div key={b} className="glass border-border rounded-[6px] px-2 py-1 text-[11px] text-steel">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* FEATURES TAG CLOUD */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex flex-wrap gap-2 justify-center"
      >
        {[
          "Increased Efficiency", "Data Driven", "Cost Effective", "Real-Time Insights",
          "AI Powered", "Zero CRM Entry", "24/7 Automation", "GDPR Compliant"
        ].map(tag => (
          <div key={tag} className="glass border-border rounded-full px-4 py-1.5 text-[13px] text-steel hover:border-border-hover hover:text-white transition-colors cursor-default">
            {tag}
          </div>
        ))}
      </motion.div>
      
      {/* Inline styles for scan line */}
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
