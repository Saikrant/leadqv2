import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTag, Reveal } from '../ui/UI';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What is LeadQ and how does it help my sales team?",
      a: "LeadQ is an AI orchestration engine that sits above your existing CRM. It deploys five specialized agents that automate everything from lead capture to meeting booking — so your reps spend 100% of their time selling, not doing admin."
    },
    {
      q: "How quickly can we get set up?",
      a: "AEs are scanning their first business card within 4 minutes of receiving their license. The AI configures itself through a 10-minute conversational onboarding. No 6-month rollout required."
    },
    {
      q: "Does this replace Salesforce or HubSpot?",
      a: "No — LeadQ overlays your existing CRM as an intelligent automation layer. It syncs bi-directionally and respects your CRM as the master system of record."
    },
    {
      q: "Is the Voice Agent compliant with TCPA regulations?",
      a: "Yes. The Voice Agent operates within configurable compliance guardrails and never auto-dials without explicit workflow approval. LeadQ is built toward SOC2 Type II certification."
    },
    {
      q: "Can I control how many calls or emails agents send daily?",
      a: "Absolutely. Admins can set hard caps per agent — for example 'Voice Agent: max 100 outbound calls/day' — from the Control Center."
    },
    {
      q: "What data sources does the Research Agent use?",
      a: "Only CCPA-compliant, public-domain sources: LinkedIn signals, corporate websites, SEC filings, and press releases. It never touches gray-market purchased lists."
    }
  ];

  return (
    <section id="faq" className="py-28 px-6">
      <Reveal className="max-w-[680px] mx-auto text-center md:text-left">
        <SectionTag>FAQs</SectionTag>
        <h2 className="mt-4 text-white text-[clamp(2rem,4.5vw,3rem)] font-[800]">
          You asked, we answered.
        </h2>
        <p className="mt-4 text-steel text-[16px]">
          Still have questions? Reach our team 7 days a week.
        </p>

        <div className="mt-10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border">
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-white text-[16px] font-semibold pr-8">{faq.q}</span>
                  <span className={`text-silver text-[20px] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-steel text-[15px] leading-[1.75]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
