import React from 'react';
import { SectionTag, Reveal } from '../ui/UI';
import { motion } from 'framer-motion';

export default function Integrations() {
  const integrations = [
    'Salesforce', 'HubSpot', 'Dynamics 365', 'Google Calendar',
    'Outlook', 'Zoom', 'LinkedIn', 'Slack', 'Zapier', 'Twilio',
    'Make.com', 'Pipedrive'
  ];

  return (
    <section className="py-28 max-w-[1100px] mx-auto px-6 text-center">
      <Reveal>
        <SectionTag>INTEGRATIONS</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800] max-w-[560px] mx-auto leading-tight">
          Integrate seamlessly.
        </h2>
        <p className="mt-4 text-steel text-[17px] max-w-[560px] mx-auto">
          LeadQ overlays your existing stack — no rip and replace. Connect Salesforce, HubSpot, Google Calendar and 40+ tools in minutes.
        </p>
        <button className="mt-8 bg-purple hover:bg-purple-light text-white rounded-full px-6 h-11 text-[16px] font-semibold transition-all duration-200">
          Book Your Demo →
        </button>
      </Reveal>

      <div className="mt-14 relative w-full lg:max-w-[900px] mx-auto">
        {/* Floating Cards */}
        <div className="hidden lg:block absolute -top-[20px] -right-[20px] z-20 glass-card p-4 w-[220px] border-border-purple" style={{ animation: 'float 4s ease-in-out infinite' }}>
          <div className="text-[10px] uppercase text-purple-light mb-3 flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full bg-[#22C55E] animate-pulse"></div>
            Real-time Data
          </div>
          <div className="flex justify-between py-2 border-b border-border text-[12px]">
            <span className="text-white">Total Leads</span>
            <div className="text-right">
              <div className="text-white font-semibold">2,847</div>
              <div className="text-steel text-[10px]">1 min ago</div>
            </div>
          </div>
          <div className="flex justify-between py-2 text-[12px]">
            <span className="text-white">Meetings Booked</span>
            <div className="text-right">
              <div className="text-white font-semibold">143</div>
              <div className="text-steel text-[10px]">3 mins ago</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute -bottom-[20px] -left-[20px] z-20 glass-card p-4 w-[200px]" style={{ animation: 'float 4s ease-in-out infinite 2s' }}>
          <div className="text-[12px] flex items-center gap-2 text-white">
            <div className="w-[8px] h-[8px] rounded-full bg-[#EF4444] animate-pulse"></div>
            Voice Agent LIVE
          </div>
          <div className="text-steel text-[11px] mt-1">Call #7 — In progress</div>
          <div className="flex items-end gap-[2px] h-[14px] mt-3">
            {[0, 0.1, 0.2, 0.1, 0].map((d, di) => (
              <motion.div 
                key={di}
                animate={{ height: ['4px', '14px', '4px'] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: d, ease: "easeInOut" }}
                className="w-[3px] bg-[#EF4444] rounded-full"
              />
            ))}
          </div>
        </div>

        {/* Integration Panel */}
        <div className="glass-card p-6 md:p-10 dot-grid relative z-10">
          <div className="mb-8">
            <SectionTag>Integrations</SectionTag>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 gap-4 items-center">
            {integrations.map(int => (
              <div key={int} className="glass rounded-[12px] p-4 aspect-square flex flex-col items-center justify-center gap-2 hover:border-border-hover hover:bg-[rgba(255,255,255,0.06)] transition-all">
                <div className="w-[28px] h-[28px] bg-[rgba(196,192,232,0.12)] rounded-[6px] mb-1"></div>
                <span className="text-steel text-[12px] font-semibold text-center">{int}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </section>
  );
}
