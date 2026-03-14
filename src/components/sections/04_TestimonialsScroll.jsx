import React from 'react';
import { SectionTag, Reveal } from '../ui/UI';

export default function TestimonialsScroll() {
  const testimonials = [
    {
      q: "LeadQ's Voice Agent handles all our warm follow-ups. Our AEs now spend 100% of time closing, zero on admin.",
      name: "James Park", role: "VP Revenue, ScaleUp Co", inits: "JP", grad: "linear-gradient(135deg, #7B6FD4, #5B4FBE)"
    },
    {
      q: "Pipeline tripled in 60 days. The Research Agent catches signals we'd have missed entirely.",
      name: "Priya Mehta", role: "CRO, NovaSales", inits: "PM", grad: "linear-gradient(135deg, #A89FE0, #7B6FD4)"
    },
    {
      q: "48-hour follow-up lag reduced to under 5 minutes. That single change 3× our conversion rate.",
      name: "David Chen", role: "AE Lead, GrowthOS", inits: "DC", grad: "linear-gradient(135deg, #5B4FBE, #8B87B3)"
    },
    {
      q: "Setup took 4 minutes. First meeting booked in 9. Our ops team was completely stunned.",
      name: "Rachel Kim", role: "RevOps, PipelineX", inits: "RK", grad: "linear-gradient(135deg, #C4C0E8, #A89FE0)"
    },
    {
      q: "The Email Agent writes better cold emails than our best human copywriter. Not exaggerating.",
      name: "Marco Silva", role: "Founder, SDR Labs", inits: "MS", grad: "linear-gradient(135deg, #7B6FD4, #A89FE0)"
    },
    {
      q: "We went from 10 SDRs to 3 AEs with LeadQ handling top-of-funnel. CAC dropped 60%.",
      name: "Aisha Patel", role: "CEO, Momentum AI", inits: "AP", grad: "linear-gradient(135deg, #5B4FBE, #7B6FD4)"
    },
    {
      q: "CRM data is finally clean. LeadQ logs everything natively. Salesforce hygiene is at 100% for the first time.",
      name: "Tom Nguyen", role: "Salesforce Admin, Vertex", inits: "TN", grad: "linear-gradient(135deg, #8B87B3, #5B4FBE)"
    },
    {
      q: "The Scheduling Agent handled 40 meeting negotiations in one day. Zero human involvement.",
      name: "Lisa Wang", role: "Head of Sales, CloudBridge", inits: "LW", grad: "linear-gradient(135deg, #A89FE0, #C4C0E8)"
    },
    {
      q: "Meeting Intelligence gives us structured notes automatically. Our deal reviews are 10× faster.",
      name: "Ben Turner", role: "VP Sales, RampUp", inits: "BT", grad: "linear-gradient(135deg, #7B6FD4, #5B4FBE)"
    }
  ];

  const col1 = [testimonials[0], testimonials[3], testimonials[6]];
  const col2 = [testimonials[1], testimonials[4], testimonials[7]];
  const col3 = [testimonials[2], testimonials[5], testimonials[8]];

  const renderCard = (t, i, className = "mb-4") => (
    <div key={i} className={`glass-card p-6 rounded-[16px] hover:border-border-hover transition-colors duration-200 text-left ${className}`}>
      <div className="flex text-[#F59E0B] text-[14px]">★★★★★</div>
      <p className="text-silver text-[14px] leading-[1.7] mt-3 italic">"{t.q}"</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[12px] font-semibold" style={{ background: t.grad }}>
          {t.inits}
        </div>
        <div>
          <div className="text-white text-[13px] font-semibold">{t.name}</div>
          <div className="text-steel text-[12px]">{t.role}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-28 text-center px-6 overflow-hidden">
      <Reveal className="relative z-10 w-full">
        <SectionTag>CUSTOMER STORIES</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800]">
          Scale faster than ever.
        </h2>
        <p className="mt-4 text-steel text-[17px] max-w-[480px] mx-auto">
          LeadQ isn't more software. It's engineered to make a difference.
        </p>
      </Reveal>

      <div className="mt-14 max-w-[1200px] mx-auto relative group testimonials-container">
        
        {/* Desktop View (Vertical Scrolling Columns) */}
        <div className="hidden md:grid grid-cols-3 gap-4 h-[560px] overflow-hidden relative">
          {/* Fade Masks */}
          <div className="absolute left-0 right-0 top-0 h-[100px] bg-gradient-to-b from-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute left-0 right-0 bottom-0 h-[100px] bg-gradient-to-t from-bg to-transparent z-10 pointer-events-none"></div>

          {/* Column 1 */}
          <div className="group-hover:[animation-play-state:paused]" style={{ animation: 'scroll-up 28s linear infinite' }}>
            {[...col1, ...col1].map((t, i) => renderCard(t, i))}
          </div>
          {/* Column 2 */}
          <div className="group-hover:[animation-play-state:paused]" style={{ animation: 'scroll-up 22s linear infinite' }}>
            {[...col2, ...col2].map((t, i) => renderCard(t, i))}
          </div>
          {/* Column 3 */}
          <div className="group-hover:[animation-play-state:paused]" style={{ animation: 'scroll-up 34s linear infinite' }}>
            {[...col3, ...col3].map((t, i) => renderCard(t, i))}
          </div>
        </div>

        {/* Mobile View (Horizontal Auto-Scrolling Row) */}
        <div className="md:hidden flex overflow-hidden relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
          {/* Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-[40px] bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-4 min-w-max px-4 group-hover:[animation-play-state:paused]" style={{ animation: 'scroll-left 40s linear infinite' }}>
            {[...testimonials, ...testimonials].map((t, i) => renderCard(t, i, "w-[280px] flex-shrink-0"))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </section>
  );
}
