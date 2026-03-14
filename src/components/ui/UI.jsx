import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SectionTag = ({ children }) => (
  <div className="inline-flex bg-[rgba(123,111,212,0.10)] border border-border-purple text-purple-light rounded-full px-4 py-1 text-[12px] uppercase tracking-wider font-semibold">
    {children}
  </div>
);

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const LiveTicker = ({ items, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className={`relative overflow-hidden h-[20px] ${className}`}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
          className="absolute whitespace-nowrap"
        >
          {items[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
