import React from 'react';

export default function AnnouncementBar() {
  const messages = [
    "✦ LeadQ.AI — Now with Voice Agent  ·  ",
    "✦ Sub-500ms call latency  ·  ",
    "✦ Zero manual CRM entry  ·  ",
    "✦ Trusted by 500+ sales teams  ·  "
  ];

  return (
    <div className="relative z-[200] h-[36px] flex items-center overflow-hidden bg-[rgba(91,79,190,0.18)] border-b border-[rgba(123,111,212,0.25)]">
      <div className="flex w-max whitespace-nowrap" style={{ animation: 'ticker 22s linear infinite' }}>
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-10 pr-10">
            {messages.map((msg, idx) => (
              <span key={idx} className="text-purple-light text-[12px] font-medium tracking-[0.04em] whitespace-pre">
                {msg}
              </span>
            ))}
          </div>
        ))}
      </div>
      <a href="#agents" className="absolute right-4 bg-[rgba(123,111,212,0.25)] border border-border-purple text-silver rounded-full px-3 py-0.5 text-[11px] font-semibold hover:bg-[rgba(123,111,212,0.40)] transition-colors">
        New: Voice Agent →
      </a>
    </div>
  );
}
