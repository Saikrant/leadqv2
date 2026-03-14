import React from 'react';
import { SectionTag, Reveal, LiveTicker } from '../ui/UI';

export default function AgentFleet() {
  const agents = [
    {
      id: "01", name: "Research Agent", role: "Intelligence Gatherer",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
      dot: '#22C55E', status: "Active", statusPulse: false,
      desc: "Crawls 40+ sources in real-time. Monitors hot leads for trigger events — funding rounds, job changes, news mentions.",
      ticker: ["Enriched: Sarah Chen — 96%", "Alert: TechFlow Series B detected", "3 hot leads flagged for follow-up"]
    },
    {
      id: "02", name: "Scheduling Agent", role: "The Negotiator",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
      dot: '#22C55E', status: "Active", statusPulse: false,
      desc: "OAuth calendar access. Proposes times inline — no Calendly links. Autonomous back-and-forth until hold is secured.",
      ticker: ["Booked: 3 meetings today", "'Thursday bad → Friday 10AM?' sent", "5 timezones cross-referenced"]
    },
    {
      id: "03", name: "Voice Agent", role: "Frontline SDR",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
      dot: '#EF4444', status: "● Live", statusPulse: true,
      desc: "Sub-500ms latency. Real VOIP calls. Full-duplex audio handles barge-ins. Watch live transcripts in your dashboard.",
      ticker: ["LIVE: 'Of course, when works better?'", "Call #7 — 3:24 duration", "Sentiment: Positive ↑"],
      wave: true
    },
    {
      id: "04", name: "Email Agent", role: "The Copywriter",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
      dot: '#22C55E', status: "Active", statusPulse: false,
      desc: "No templates. Research summary + call notes synthesized into hyper-personalized outreach. Tone adapts to seniority.",
      ticker: ["14 follow-ups drafted today", "Open rate: 68% this week", "C-Level tone: 94% match"]
    },
    {
      id: "05", name: "Meeting AI", role: "The Scribe",
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
      dot: '#22C55E', status: "Active", statusPulse: false,
      desc: "Joins Zoom, Teams, or Meet. Post-call: structured notes, pain points, next steps — all logged to CRM automatically.",
      ticker: ["Transcribing: ACE Corp call", "3 action items created", "Summary emailed to AE"]
    }
  ];

  return (
    <section id="agents" className="py-20 bg-bg-surface px-6">
      <Reveal className="text-center max-w-[1100px] mx-auto">
        <SectionTag>THE SWARM</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800]">
          Five Agents. One Goal: Revenue.
        </h2>
        <p className="mt-4 text-steel text-[17px] max-w-[560px] mx-auto">
          Specialized, autonomous, running 24/7.
        </p>
      </Reveal>

      <div className="mt-14 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((ag) => (
          <Reveal key={ag.id} className="glass-card p-7 relative overflow-hidden group hover:-translate-y-1 hover:border-border-purple/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(123,111,212,0.08)] rounded-full blur-[40px]"></div>
            
            <div className="flex items-center justify-between mb-5 relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: ag.dot }}></div>
                <span className="text-[10px] uppercase tracking-wider text-steel">Agent {ag.id}</span>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${ag.statusPulse ? 'bg-[rgba(239,68,68,0.12)] border-[rgba(239,68,68,0.3)] text-[#EF4444]' : 'bg-[rgba(34,197,94,0.12)] border-[rgba(34,197,94,0.3)] text-[#22C55E]'}`}>
                {ag.status}
              </div>
            </div>

            <div className="relative z-10">
              <svg className="w-[28px] h-[28px] text-purple-light mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {ag.icon}
              </svg>
              <h3 className="text-white text-[18px] font-bold">{ag.name}</h3>
              <div className="text-steel text-[12px] mt-0.5">{ag.role}</div>
              
              <hr className="border-border my-4" />
              
              <p className="text-steel text-[14px] leading-[1.65] min-h-[70px]">
                {ag.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-[rgba(196,192,232,0.05)] text-purple-light text-[12px]">
                <LiveTicker items={ag.ticker} />
                {ag.wave && (
                  <div className="flex items-end gap-[2px] h-[14px] mt-2">
                    {[0, 0.1, 0.2, 0.1, 0].map((d, di) => (
                      <div 
                        key={di}
                        className="w-[3px] bg-[#EF4444] rounded-full animate-[wave_1s_ease-in-out_infinite]"
                        style={{ height: '14px', animationDelay: `${d}s` }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        {/* Coming Soon Card */}
        <Reveal className="glass-card p-7 relative overflow-hidden group border-border/50 opacity-50">
          <div className="flex items-center justify-between mb-5 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-steel"></div>
              <span className="text-[10px] uppercase tracking-wider text-steel">Agent 06</span>
            </div>
            <div className="px-2 py-0.5 rounded-full text-[10px] font-semibold border bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-silver">
              Coming Q2 2025
            </div>
          </div>
          <div className="relative z-10">
            <svg className="w-[28px] h-[28px] text-steel mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-white text-[18px] font-bold">Outbound AI</h3>
            <div className="text-steel text-[12px] mt-0.5">The Prospector</div>
            <hr className="border-border my-4" />
            <p className="text-steel text-[14px] leading-[1.65]">
              AI-generated personalized video pitches sent to cold prospects automatically. Powered by HeyGen/Synthesia.
            </p>
          </div>
        </Reveal>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 14px; }
        }
      `}} />
    </section>
  );
}
