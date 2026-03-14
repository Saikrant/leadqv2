import React, { useState } from 'react';
import { SectionTag, Reveal } from '../ui/UI';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 dot-grid px-6 text-center">
      <Reveal className="max-w-[900px] mx-auto">
        <SectionTag>PRICING</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800]">
          Pricing that makes sense.
        </h2>
        <p className="mt-4 text-steel text-[17px]">
          Designed to scale with your revenue team.
        </p>

        {/* Toggle */}
        <div className="mt-8 mx-auto w-fit bg-[rgba(255,255,255,0.05)] border border-border rounded-[12px] p-1 flex">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`rounded-[8px] px-5 py-2 text-[14px] font-semibold transition-colors duration-200 ${!isAnnual ? 'bg-purple text-white' : 'text-steel'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`rounded-[8px] px-5 py-2 text-[14px] font-semibold transition-colors duration-200 flex items-center ${isAnnual ? 'bg-purple text-white' : 'text-steel'}`}
          >
            Annual
            <span className="ml-2 bg-[rgba(34,197,94,0.15)] text-[#22C55E] border border-[rgba(34,197,94,0.3)] rounded-full px-2 py-0.5 text-[11px] font-bold">
              Save 40%
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left relative z-10">
          
          {/* Card 1 — Standard */}
          <div className="glass-card p-8 flex flex-col">
            <div className="text-steel text-[13px] uppercase font-semibold">Standard</div>
            <div className="mt-2 text-white text-[52px] font-[800] leading-none">
              ${isAnnual ? '29' : '49'}<span className="text-steel text-[16px] font-normal">/month</span>
            </div>
            <div className="text-steel text-[14px] mt-2 h-[42px]">
              For solo AEs and fast-moving small teams.
            </div>
            <button className="mt-6 w-full h-11 bg-transparent border border-border text-silver rounded-full text-[15px] font-semibold hover:bg-white/5 hover:text-white transition-colors">
              Book Your Demo
            </button>
            <div className="text-steel text-[12px] text-center mt-2">Billed {isAnnual ? 'annually' : 'monthly'}</div>

            <hr className="border-border my-6" />
            <div className="text-steel text-[12px] uppercase mb-4">Including:</div>
            
            <div className="flex flex-col gap-3 flex-1">
              {[
                { n: "Intelligent Lead Capture", a: true },
                { n: "Research Agent (500 leads/mo)", a: true },
                { n: "Email Agent", a: true },
                { n: "Calendar Integration", a: true },
                { n: "Basic CRM Sync", a: true },
                { n: "Voice Agent", a: false },
                { n: "Meeting Intelligence", a: false }
              ].map((f, i) => (
                <div key={i} className={`flex items-center gap-3 ${f.a ? 'opacity-100' : 'opacity-[0.35]'}`}>
                  <div className="w-[16px] h-[16px] rounded-full bg-[rgba(123,111,212,0.2)] text-purple-light flex items-center justify-center text-[10px]">
                    ✓
                  </div>
                  <span className="text-white text-[14px] font-semibold">{f.n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Pro */}
          <div className="relative">
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#5B4FBE] to-[#7B6FD4] text-white text-[12px] font-bold rounded-full px-5 py-1.5 shadow-[0_4px_20px_rgba(91,79,190,0.50)] z-20 whitespace-nowrap">
              Most Popular
            </div>
            <div className="h-full border border-[rgba(123,111,212,0.45)] bg-[rgba(91,79,190,0.07)] shadow-[0_0_0_1px_rgba(123,111,212,0.15),0_0_60px_rgba(91,79,190,0.20)] rounded-[20px] p-8 flex flex-col relative z-10">
              <div className="text-steel text-[13px] uppercase font-semibold">Professional</div>
              <div className="mt-2 text-white text-[52px] font-[800] leading-none">
                ${isAnnual ? '59' : '99'}<span className="text-steel text-[16px] font-normal">/month</span>
              </div>
              <div className="text-steel text-[14px] mt-2 h-[42px]">
                For growing revenue teams that need the full swarm.
              </div>
              <button className="mt-6 w-full h-11 bg-purple hover:bg-purple-light text-white rounded-full text-[15px] font-semibold transition-all">
                Book Your Demo
              </button>
              <div className="text-steel text-[12px] text-center mt-2">Billed {isAnnual ? 'annually' : 'monthly'}</div>

              <hr className="border-border my-6" />
              <div className="text-steel text-[12px] uppercase mb-4">Standard plus:</div>
              
              <div className="flex flex-col gap-3 flex-1">
                {[
                  "All 5 Agents Fully Active",
                  "Voice Agent (100 calls/day)",
                  "Meeting Intelligence Agent",
                  "Unlimited Leads",
                  "Full Bi-Directional CRM Sync",
                  "Priority Support"
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-[16px] h-[16px] rounded-full bg-[rgba(123,111,212,0.2)] text-purple-light flex items-center justify-center text-[10px]">
                      ✓
                    </div>
                    <span className="text-white text-[14px] font-semibold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-steel text-[13px]">
          All plans include 14-day free trial · No credit card required
        </div>
      </Reveal>
    </section>
  );
}
